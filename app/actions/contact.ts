"use server";

import { contactSchema } from "@/lib/validation/contact";
import { getResendClient, contactToEmail, contactFromEmail } from "@/lib/resend";
import { ownerNotificationEmail, autoReplyEmail } from "@/lib/email/templates";
import type { ContactFormState } from "@/lib/contact-form-state";

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: field(formData, "name"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    subject: field(formData, "subject"),
    message: field(formData, "message"),
    type: field(formData, "type") || "general",
    budget: field(formData, "budget"),
    rateType: field(formData, "rateType"),
    company: field(formData, "company"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot field — real visitors never fill this in. Pretend success, send nothing.
  if (parsed.data.company) {
    return { status: "success", message: "Thanks! I'll get back to you soon." };
  }

  try {
    const resend = getResendClient();
    const notification = ownerNotificationEmail(parsed.data);
    const reply = autoReplyEmail(parsed.data);

    const ownerResult = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: parsed.data.email,
      subject: notification.subject,
      html: notification.html,
    });

    if (ownerResult.error) {
      throw new Error(ownerResult.error.message);
    }

    // Best-effort auto-reply — a failure here shouldn't fail the whole submission.
    try {
      await resend.emails.send({
        from: contactFromEmail,
        to: parsed.data.email,
        subject: reply.subject,
        html: reply.html,
      });
    } catch (replyError) {
      console.error("Contact form auto-reply failed to send", replyError);
    }

    return { status: "success", message: "Thanks! I'll get back to you within a day or two." };
  } catch (error) {
    console.error("Contact form submission failed", error);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email me directly at ${contactToEmail}.`,
    };
  }
}

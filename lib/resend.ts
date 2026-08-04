import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Sign up at https://resend.com, create an API key, and add it to .env.local."
    );
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

export const contactToEmail = process.env.CONTACT_TO_EMAIL || "therizwan027@gmail.com";
export const contactFromEmail =
  process.env.RESEND_FROM_EMAIL || "Mohd Rizwan Portfolio <onboarding@resend.dev>";

import type { ContactInput } from "@/lib/validation/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const typeLabels: Record<ContactInput["type"], string> = {
  general: "General inquiry",
  freelancer: "Freelance / contract inquiry",
  job: "Job opportunity",
};

const BRAND_DARK = "#111a24";
const BRAND_ACCENT = "#f41a4a";

function emailShell(bodyHtml: string) {
  return `
    <div style="background-color: #f4f4f7; padding: 32px 16px; font-family: 'Segoe UI', Arial, sans-serif;">
      <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #eae8ef;">
        <div style="background-color: ${BRAND_DARK}; padding: 24px 32px;">
          <span style="font-size: 20px; font-weight: 700; color: #ffffff;">Riz<span style="color: ${BRAND_ACCENT};">wan</span></span>
        </div>
        <div style="padding: 32px; color: ${BRAND_DARK}; font-size: 15px; line-height: 1.6;">
          ${bodyHtml}
        </div>
        <div style="padding: 18px 32px; background-color: #f7f5fb; border-top: 1px solid #eae8ef; font-size: 12px; color: #888;">
          Sent from the contact form at mohdrizwan.dev
        </div>
      </div>
    </div>
  `;
}

export function ownerNotificationEmail(data: ContactInput) {
  const rows = [
    ["Type", typeLabels[data.type]],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Subject", data.subject || "—"],
    ...(data.rateType ? [["Rate Type", data.rateType]] : []),
    ...(data.budget ? [["Offer / Salary", data.budget]] : []),
  ];

  const firstName = data.name.trim().split(" ")[0] || data.name;

  const body = `
    <h2 style="margin: 0 0 4px; font-size: 20px; font-weight: 700;">New message from your portfolio</h2>
    <p style="margin: 0 0 20px; color: #666;">${escapeHtml(firstName)} just reached out through the contact form.</p>
    <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      ${rows
        .map(
          ([label, value]) => `
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 120px; vertical-align: top; border-bottom: 1px solid #eae8ef;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eae8ef;">${escapeHtml(value)}</td>
          </tr>`
        )
        .join("")}
    </table>
    <p style="font-weight: 600; margin-bottom: 8px;">Message</p>
    <div style="background-color: #f7f5fb; border-radius: 12px; padding: 16px; white-space: pre-wrap; color: #333;">${escapeHtml(data.message)}</div>
    <p style="margin-top: 24px;">
      <a href="mailto:${escapeHtml(data.email)}" style="display: inline-block; background-color: ${BRAND_ACCENT}; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 12px; font-weight: 600; font-size: 14px;">Reply to ${escapeHtml(firstName)}</a>
    </p>
  `;

  return {
    subject: `New portfolio inquiry from ${data.name}`,
    html: emailShell(body),
  };
}

export function autoReplyEmail(data: ContactInput) {
  const firstName = data.name.trim().split(" ")[0] || data.name;

  const body = `
    <h2 style="margin: 0 0 4px; font-size: 22px; font-weight: 700;">Thanks for reaching out, ${escapeHtml(firstName)}!</h2>
    <p style="margin: 16px 0; color: #333;">
      I really appreciate you taking the time to get in touch through my portfolio. Your message landed safely in my inbox, and I'll personally read through it and get back to you within a day or two.
    </p>
    <p style="margin: 16px 0; color: #333;">
      In the meantime, feel free to look through some of my
      <a href="https://mohdrizwan.dev/projects" style="color: ${BRAND_ACCENT}; text-decoration: none; font-weight: 600;">recent projects</a>
      or connect with me on
      <a href="https://www.linkedin.com/in/the-rizwan-shaikh/" style="color: ${BRAND_ACCENT}; text-decoration: none; font-weight: 600;">LinkedIn</a>.
    </p>
    <p style="margin: 20px 0 8px; font-weight: 600; color: #555;">Your message, for reference:</p>
    <div style="background-color: #f7f5fb; border-left: 3px solid ${BRAND_ACCENT}; border-radius: 8px; padding: 16px; color: #555; white-space: pre-wrap;">${escapeHtml(
      data.message
    )}</div>
    <p style="margin-top: 28px; margin-bottom: 0; color: #333;">Talk soon,</p>
    <p style="margin: 4px 0 0; font-size: 18px; font-weight: 700; color: ${BRAND_DARK};">Mohd Rizwan</p>
    <p style="margin: 2px 0 0; font-size: 13px; color: #888;">UI Developer</p>
  `;

  return {
    subject: `Thanks for reaching out, ${firstName} — I'll be in touch soon`,
    html: emailShell(body),
  };
}

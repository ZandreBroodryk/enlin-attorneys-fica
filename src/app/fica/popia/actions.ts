"use server";

import { createPopiaEntry } from "@/lib/db/repository/popia";
import { sendEmailAsync } from "@/lib/email/email-sender";
import { popiaConsentType } from "@/lib/forms/fica-schemas";

export async function submitPopiaForm(formData: popiaConsentType) {
  const result = await createPopiaEntry(formData);
  if (result.success) {
    await sendEmailAsync({
      to: process.env.NOTIFY_EMAIL,
      subject: "POPIA Consent Entry just created",
      html: `${result.data?.email} has just signed POPIA consent visit <a href="${process.env.VERCEL_URL}/admin">admin</a>`,
    });
    return !!result.data;
  }

  return result.message;
}

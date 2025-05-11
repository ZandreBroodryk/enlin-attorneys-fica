"use server";

import { createTrustFicaEntry } from "@/lib/db/repository/trust";
import { sendEmailAsync } from "@/lib/email/email-sender";
import { trustFicaType } from "@/lib/forms/fica-schemas";

export async function submitTrsutFicaForm(formData: trustFicaType) {
  const result = await createTrustFicaEntry(formData);
  if (result.success) {
    await sendEmailAsync({
      to: process.env.NOTIFY_EMAIL,
      subject: "Trust Fica Entry just created",
      html: `${result.data?.trustName} has just completed FICA submission visit <a href="${process.env.VERCEL_URL}/admin">admin</a>`,
    });
    return !!result.data;
  }

  return result.message;
}

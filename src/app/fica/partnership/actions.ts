"use server";

import { createPartnershipFicaEntry } from "@/lib/db/repository/partnership";
import { sendEmailAsync } from "@/lib/email/email-sender";
import { partnershipFicaType } from "@/lib/forms/fica-schemas";

export async function submitPartnershipForm(formData: partnershipFicaType) {
  const result = await createPartnershipFicaEntry(formData);
  if (result.success) {
    await sendEmailAsync({
      to: process.env.NOTIFY_EMAIL,
      subject: "Partnership Fica Entry just created",
      html: `${result.data?.partnershipTradingName} has just completed FICA submission visit <a href="${process.env.VERCEL_URL}/admin">admin</a>`,
    });
    return !!result.data;
  }

  return result.message;
}

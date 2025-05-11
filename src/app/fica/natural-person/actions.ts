"use server";

import { createNaturalPersonFicaEntry } from "@/lib/db/repository/natural-person";
import { sendEmailAsync } from "@/lib/email/email-sender";
import { naturalPersonType } from "@/lib/forms/fica-schemas";

export async function submitNaturalPersonForm(formData: naturalPersonType) {
  const result = await createNaturalPersonFicaEntry(formData);
  if (result.success) {
    await sendEmailAsync({
      to: process.env.NOTIFY_EMAIL,
      subject: "Natural Person Fica Entry just created",
      html: `${result.data?.fullNames} has just completed FICA submission visit <a href="${process.env.VERCEL_URL}/admin">admin</a>`,
    });
    return !!result.data;
  }

  return result.message;
}

"use server";

import { createPartnershipFicaEntry } from "@/lib/db/repository/partnership";
import { partnershipFicaType } from "@/lib/forms/fica-schemas";

export async function submitPartnershipForm(formData: partnershipFicaType) {
  const result = await createPartnershipFicaEntry(formData);
  if (result.success) {
    return !!result.data;
  }

  return result.message;
}

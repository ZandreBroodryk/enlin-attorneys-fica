"use server";

import { createTrustFicaEntry } from "@/lib/db/repository/trust";
import { trustFicaType } from "@/lib/forms/fica-schemas";

export async function submitTrsutFicaForm(formData: trustFicaType) {
  const result = await createTrustFicaEntry(formData);
  if (result.success) {
    return !!result.data;
  }

  return result.message;
}

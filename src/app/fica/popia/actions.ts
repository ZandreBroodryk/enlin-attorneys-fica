"use server";

import { createPopiaEntry } from "@/lib/db/repository/popia";
import { popiaConsentType } from "@/lib/forms/fica-schemas";

export async function submitPopiaForm(formData: popiaConsentType) {
  const result = await createPopiaEntry(formData);
  if (result.success) {
    return !!result.data;
  }

  return result.message;
}

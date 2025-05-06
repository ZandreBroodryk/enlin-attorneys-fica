"use server";

import { createNaturalParsonEntry } from "@/lib/db/repository/natural-person";
import { naturalPersonType } from "@/lib/forms/fica-schemas";

export async function submitNaturalPersonForm(formData: naturalPersonType) {
  const result = await createNaturalParsonEntry(formData);
  if (result.success) {
    return !!result.data;
  }

  return result.message;
}

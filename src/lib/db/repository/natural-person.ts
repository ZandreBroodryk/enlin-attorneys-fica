import { naturalPersonType } from "@/lib/forms/fica-schemas";
import { db } from "..";
import { naturalPersonFica } from "../schema";

export async function getNaturalPersonSubmissions() {
  const popiaConsentItems = await db.query.naturalPersonFica.findMany();

  return popiaConsentItems;
}

export async function createNaturalParsonEntry(formData: naturalPersonType) {
  try {
    const result = await db
      .insert(naturalPersonFica)
      .values(formData)
      .returning();

    return { success: true, data: result.at(0) };
  } catch (error) {
    return { success: false, message: JSON.stringify(error) };
  }
}

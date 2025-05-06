import { popiaConsentType } from "@/lib/forms/fica-schemas";
import { db } from "..";
import { popiaConsent } from "../schema";

export async function getPopiaSubmissions() {
  const popiaConsentItems = await db.query.popiaConsent.findMany();

  return popiaConsentItems;
}

export async function createPopiaEntry(formData: popiaConsentType) {
  try {
    const result = await db.insert(popiaConsent).values(formData).returning();

    return { success: true, data: result.at(0) };
  } catch (error) {
    return { success: false, message: JSON.stringify(error) };
  }
}

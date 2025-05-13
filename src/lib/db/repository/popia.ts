import {
  popiaConsentSelectType,
  popiaConsentType,
} from "@/lib/forms/fica-schemas";
import { db } from "..";
import { popiaConsent } from "../schema";
import { paginationResult, paginationType } from "@/lib/shared";
import { count } from "drizzle-orm";

export async function numberOfSubmissions() {
  const countQuery = await db.select({ count: count() }).from(popiaConsent);
  return countQuery[0].count;
}

export async function getPopiaSubmissions(
  params: paginationType,
): Promise<paginationResult<popiaConsentSelectType>> {
  const itemsTask = db.query.popiaConsent.findMany({
    limit: params.pageSize,
    offset: (params.pageNumber - 1) * params.pageSize,
  });

  const entriesCountTask = db.select({ count: count() }).from(popiaConsent);

  const [items, entriesCount] = await Promise.all([
    itemsTask,
    entriesCountTask,
  ]);

  const numberOfPages = Math.ceil(entriesCount[0].count / params.pageSize);

  return { numberOfPages, items };
}

export async function createPopiaEntry(formData: popiaConsentType) {
  try {
    const result = await db.insert(popiaConsent).values(formData).returning();

    return { success: true, data: result.at(0) };
  } catch (error) {
    return { success: false, message: JSON.stringify(error) };
  }
}

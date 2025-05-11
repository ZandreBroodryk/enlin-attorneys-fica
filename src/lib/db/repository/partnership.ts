import {
  partnershipFicaType,
  partnershipSelectType,
} from "@/lib/forms/fica-schemas";
import { db } from "..";
import { partnershipFica } from "../schema";
import { paginationResult, paginationType } from "@/lib/shared";
import { count } from "drizzle-orm";

export async function getPartnershipFicaSubmissions(
  params: paginationType,
): Promise<paginationResult<partnershipSelectType>> {
  const itemsTask = db.query.partnershipFica.findMany({
    limit: params.pageSize,
    offset: (params.pageNumber - 1) * params.pageSize,
  });

  const entriesCountTask = db.select({ count: count() }).from(partnershipFica);

  const [items, entriesCount] = await Promise.all([
    itemsTask,
    entriesCountTask,
  ]);

  const numberOfPages = Math.ceil(entriesCount[0].count / params.pageSize);

  return { numberOfPages, items };
}

export async function createPartnershipFicaEntry(
  formData: partnershipFicaType,
) {
  try {
    const result = await db
      .insert(partnershipFica)
      .values(formData)
      .returning();

    return { success: true, data: result.at(0) };
  } catch (error) {
    return { success: false, message: JSON.stringify(error) };
  }
}

import { trustFicaSelectType, trustFicaType } from "@/lib/forms/fica-schemas";
import { db } from "..";
import { trustFica } from "../schema";
import { paginationResult, paginationType } from "@/lib/shared";
import { count } from "drizzle-orm";

export async function getTrustFicaSubmissions(
  params: paginationType,
): Promise<paginationResult<trustFicaSelectType>> {
  const itemsTask = db.query.trustFica.findMany({
    limit: params.pageSize,
    offset: (params.pageNumber - 1) * params.pageSize,
  });

  const entriesCountTask = db.select({ count: count() }).from(trustFica);

  const [items, entriesCount] = await Promise.all([
    itemsTask,
    entriesCountTask,
  ]);

  const numberOfPages = Math.ceil(entriesCount[0].count / params.pageSize);

  return { numberOfPages, items };
}

export async function createTrustFicaEntry(formData: trustFicaType) {
  try {
    const result = await db.insert(trustFica).values(formData).returning();

    return { success: true, data: result.at(0) };
  } catch (error) {
    return { success: false, message: JSON.stringify(error) };
  }
}

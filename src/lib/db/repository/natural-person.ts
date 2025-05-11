import {
  naturalPersonFicaSelectType,
  naturalPersonType,
} from "@/lib/forms/fica-schemas";
import { db } from "..";
import { naturalPersonFica } from "../schema";
import { paginationResult, paginationType } from "@/lib/shared";
import { count } from "drizzle-orm";

export async function getNaturalPersonFicaSubmissions(
  params: paginationType,
): Promise<paginationResult<naturalPersonFicaSelectType>> {
  const itemsTask = db.query.naturalPersonFica.findMany({
    limit: params.pageSize,
    offset: (params.pageNumber - 1) * params.pageSize,
  });

  const entriesCountTask = db
    .select({ count: count() })
    .from(naturalPersonFica);

  const [items, entriesCount] = await Promise.all([
    itemsTask,
    entriesCountTask,
  ]);

  const numberOfPages = Math.ceil(entriesCount[0].count / params.pageSize);

  return { numberOfPages, items };
}

export async function createNaturalPersonFicaEntry(
  formData: naturalPersonType,
) {
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

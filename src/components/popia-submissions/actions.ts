"use server";

import { getPopiaSubmissions } from "@/lib/db/repository/popia";
import { paginationType } from "@/lib/shared";

export async function getPopiaSubmissionsAdmin(params: paginationType) {
  return await getPopiaSubmissions(params);
}

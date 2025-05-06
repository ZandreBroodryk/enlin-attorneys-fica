"use server";

import { getPopiaSubmissions } from "@/lib/db/repository/popia";

export async function getPopiaSubmissionsAdmin() {
  return await getPopiaSubmissions();
}

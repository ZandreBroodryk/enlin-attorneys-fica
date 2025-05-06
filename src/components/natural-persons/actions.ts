"use server";

import { getNaturalPersonSubmissions } from "@/lib/db/repository/natural-person";

export async function getNaturalPersonSubmissionsAdmin() {
  return await getNaturalPersonSubmissions();
}

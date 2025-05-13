"use server";

import {
  getNaturalPersonFicaSubmissions,
  numberOfSubmissions,
} from "@/lib/db/repository/natural-person";
import { paginationType } from "@/lib/shared";

export async function getNaturalPersonSubmissionsAdmin(params: paginationType) {
  return await getNaturalPersonFicaSubmissions(params);
}

export async function getNaturalPersonSubmissionsCount() {
  return await numberOfSubmissions();
}

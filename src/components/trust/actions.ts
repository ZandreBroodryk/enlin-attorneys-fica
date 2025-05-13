"use server";

import {
  getTrustFicaSubmissions,
  numberOfSubmissions,
} from "@/lib/db/repository/trust";
import { paginationType } from "@/lib/shared";

export async function getTrustSubmissionsAdmin(params: paginationType) {
  return await getTrustFicaSubmissions(params);
}

export async function getTrustSubmissionsCount() {
  return await numberOfSubmissions();
}

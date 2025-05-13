"use server";

import {
  getPartnershipFicaSubmissions,
  numberOfSubmissions,
} from "@/lib/db/repository/partnership";
import { paginationType } from "@/lib/shared";

export async function getPartnershipSubmissionsAdmin(params: paginationType) {
  return await getPartnershipFicaSubmissions(params);
}

export async function getPartnershipSubmissionsCount() {
  return await numberOfSubmissions();
}

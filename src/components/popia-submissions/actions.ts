"use server";

import {
  getPopiaSubmissions,
  numberOfSubmissions,
} from "@/lib/db/repository/popia";
import { paginationType } from "@/lib/shared";

export async function getPopiaSubmissionsAdmin(params: paginationType) {
  return await getPopiaSubmissions(params);
}

export async function getPopiaSubmissionsCount() {
  return await numberOfSubmissions();
}

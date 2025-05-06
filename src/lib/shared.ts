import { z } from "zod";

export const residencyStatusValues = [
  "Temporary Resident",
  "Permanent Resident",
] as const;

export const residencyStatus = z.enum(residencyStatusValues);
export type residencyStatusType = z.infer<typeof residencyStatus>;

export const maritalStatusValues = [
  "Unmarried",
  "Married with ANC",
  "Married without ANC",
] as const;

export const maritalStatus = z.enum(maritalStatusValues);

export type maritalStatusType = z.infer<typeof maritalStatus>;

export const servicesRequiredNaturalPersonValues = [
  "Conveyancing",
  "ANC",
  "Bond Registration",
  "Bond Cancellation",
  "Wills",
  "Deceased Estate",
] as const;
export const servicesRequiredNaturalPerson = z.enum(
  servicesRequiredNaturalPersonValues,
);

export type servicesRequiredNaturalPersonType = z.infer<
  typeof servicesRequiredNaturalPerson
>;

export const servicesRequiredTrustAndPartnershipValues = [
  "Conveyancing",
  "Bond registration",
  "Bond cancellation",
] as const;
export const servicesRequiredTrustAndPartnership = z.enum(
  servicesRequiredTrustAndPartnershipValues,
);

export type servicesRequiredTrustAndPartnerShipType = z.infer<
  typeof servicesRequiredTrustAndPartnership
>;

export const consentOptionsValues = ["Yes", "No"] as const;

export const consentOptions = z.enum(consentOptionsValues);

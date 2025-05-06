import { z } from "zod";

export const residencyStatus = z.enum([
  "Temporary Resident",
  "Permanent Resident",
]);
export type residencyStatusType = z.infer<typeof residencyStatus>;

export const maritalStatus = z.enum([
  "Unmarried",
  "Married with ANC",
  "Married without ANC",
]);

export type maritalStatusType = z.infer<typeof maritalStatus>;

export const servicesRequiredNaturalPerson = z.enum([
  "Conveyancing",
  "ANC",
  "Bond Registration",
  "Bond Cancellation",
  "Wills",
  "Deceased Estate",
]);

export type servicesRequiredNaturalPersonType = z.infer<
  typeof servicesRequiredNaturalPerson
>;

const foreignerSchema = z.object({
  passportNumber: z.string(),
  dateOfBirth: z.string().date(),
  residencyStatus: residencyStatus,
});

export const naturalPersonSchema = z.object({
  email: z.string().email(),
  fullNames: z.string().min(3),
  saIdNumber: z
    .string()
    .length(13)
    .regex(/^\d+$/, {
      message: "Only numeric characters are allowed",
    })
    .optional(),
  citizenship: z.string(),
  foreigner: foreignerSchema.optional(),
  addressOfMainResidence: z.string(),
  maritalStatus: maritalStatus,
  incomeTaxNr: z.string(),
  contactNumber: z.string().max(50),
  servicesRequired: z.array(servicesRequiredNaturalPerson),
  representingAs: z.string().optional(),
});

export type naturalPersonType = z.infer<typeof naturalPersonSchema>;

export const servicesRequiredTrustAndPartnership = z.enum([
  "Conveyancing",
  "Bond registration",
  "Bond cancellation",
]);

export type servicesRequiredTrustAndPartnerShipType = z.infer<
  typeof servicesRequiredTrustAndPartnership
>;

export const trustFicaSchema = z.object({
  trustName: z.string(),
  trustNumber: z.string(),
  courtName: z.string(),
  placeOfBusiness: z.string(),
  incomeTaxNr: z.string(),
  vatNr: z.string(),
  primaryContactNr: z.string(),
  primaryEmail: z.string().email(),
  websiteUrl: z.string().url().optional(),
  servicesRequired: servicesRequiredTrustAndPartnership.array(),
});

export type trustFicaType = z.infer<typeof trustFicaSchema>;

export const partnershipFicaSchema = z.object({
  partnershipTradingName: z.string(),
  natureOfBusiness: z.string(),
  numberOfPartners: z.number().gt(1),
  incomeTaxNr: z.string(),
  vatNr: z.string(),
  placeOfBusiness: z.string(),
  primaryContactNr: z.string(),
  primaryEmail: z.string().email(),
  websiteUrl: z.string().url().optional(),
  servicesRequired: servicesRequiredTrustAndPartnership.array(),
});

export type partnershipFicaType = z.infer<typeof partnershipFicaSchema>;

export const consentOptions = z.enum(["Yes", "No"]);

export const popiaConsentSchema = z.object({
  consent: consentOptions,
  email: z.string().email(),
  date: z.string().date(),
  signature: z.string().min(10, "Signature is Required"),
});

export type popiaConsentType = z.infer<typeof popiaConsentSchema>;

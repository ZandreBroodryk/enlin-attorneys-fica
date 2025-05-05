import { z } from "zod";

export const residencyStatuses = z.enum([
  "Temporary Resident",
  "Permanent Resident",
]);
export type residencyStatus = z.infer<typeof residencyStatuses>;

export const maritalStatuses = z.enum([
  "Unmarried",
  "Married with ANC",
  "Married without ANC",
]);

export type maritalStatus = z.infer<typeof maritalStatuses>;

export const servicesRequired = z.enum([
  "Conveyancing",
  "ANC",
  "Bond Registration",
  "Bond Cancellation",
  "Wills",
  "Deceased Estate",
]);

export type servicesRequiredType = z.infer<typeof servicesRequired>;

const foreignerSchema = z.object({
  passportNumber: z.string(),
  dateOfBirth: z.string().date(),
  residencyStatus: residencyStatuses,
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
  maritalStatus: maritalStatuses,
  incomeTaxNr: z.string(),
  contactNumber: z.string().max(50),
  servicesRequired: z.array(servicesRequired),
  representingAs: z.string().optional(),
});

export type naturalPersonType = z.infer<typeof naturalPersonSchema>;

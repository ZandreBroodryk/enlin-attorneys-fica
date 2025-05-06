import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import {
  naturalPersonFica,
  partnershipFica,
  popiaConsent,
  trustFica,
} from "../db/schema";

export const naturalPersonSchema = createInsertSchema(naturalPersonFica, {
  email: (schema) => schema.email(),
  saIdNumber: (schema) =>
    schema.length(13).regex(/^\d+$/, {
      message: "Only numeric characters are allowed",
    }),
});

export type naturalPersonType = z.infer<typeof naturalPersonSchema>;

export const trustFicaSchema = createInsertSchema(trustFica, {
  primaryEmail: (schema) => schema.email(),
  websiteUrl: (schema) => schema.url(),
});

export type trustFicaType = z.infer<typeof trustFicaSchema>;

export const partnershipFicaSchema = createInsertSchema(partnershipFica, {
  numberOfPartners: (schema) => schema.gt(1),
  primaryEmail: (schema) => schema.email(),
  websiteUrl: (schema) => schema.url(),
});

export type partnershipFicaType = z.infer<typeof partnershipFicaSchema>;

export const popiaConsentSchema = createInsertSchema(popiaConsent, {
  email: (schema) => schema.email(),
  signature: (schema) => schema.min(4, "Signature is Required"),
});

export type popiaConsentType = z.infer<typeof popiaConsentSchema>;

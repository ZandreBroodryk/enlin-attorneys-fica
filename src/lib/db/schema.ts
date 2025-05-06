import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

import {
  consentOptionsValues,
  maritalStatusValues,
  residencyStatusValues,
  servicesRequiredNaturalPersonValues,
  servicesRequiredTrustAndPartnershipValues,
} from "../shared";
import { sql } from "drizzle-orm";

export const naturalPersonFica = pgTable("natural_person_fica", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  fullNames: varchar({ length: 255 }).notNull(),
  saIdNumber: varchar({ length: 13 }).unique(),
  passportNumber: varchar({ length: 9 }).unique(),
  dateOfBirth: date(),
  residencyStatus: varchar({ enum: residencyStatusValues }),
  citizenship: varchar({ length: 125 }).notNull(),
  addressOfMainResidence: varchar({ length: 255 }).notNull(),
  maritalStatus: varchar({ enum: maritalStatusValues }).notNull(),
  incomeTaxNr: varchar().notNull(),
  contactNumber: varchar({ length: 50 }).notNull(),
  servicesRequired: varchar({ enum: servicesRequiredNaturalPersonValues })
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  representingAs: varchar(),
});

export const trustFica = pgTable("trust_fica", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  trustName: varchar({ length: 255 }).notNull(),
  trustNumber: varchar({ length: 255 }).notNull(),
  courtName: varchar({ length: 255 }).notNull(),
  placeOfBusiness: varchar({ length: 255 }).notNull(),
  incomeTaxNr: varchar({ length: 10 }).notNull(),
  vatNr: varchar({ length: 9 }).notNull(),
  primaryContactNr: varchar({ length: 50 }).notNull(),
  primaryEmail: varchar({ length: 255 }).unique().notNull(),
  websiteUrl: varchar({ length: 2048 }),
  servicesRequired: varchar({ enum: servicesRequiredTrustAndPartnershipValues })
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
});

export const partnershipFica = pgTable("partnership_fica", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  partnershipTradingName: varchar({ length: 255 }).notNull(),
  natureOfBusiness: varchar({ length: 255 }).notNull(),
  numberOfPartners: integer().notNull(),
  placeOfBusiness: varchar({ length: 255 }).notNull(),
  incomeTaxNr: varchar({ length: 10 }).notNull(),
  vatNr: varchar({ length: 9 }).notNull(),
  primaryContactNr: varchar({ length: 50 }).notNull(),
  primaryEmail: varchar({ length: 255 }).unique().notNull(),
  websiteUrl: varchar({ length: 2048 }),
  servicesRequired: varchar({ enum: servicesRequiredTrustAndPartnershipValues })
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
});

export const popiaConsent = pgTable("popia_consent", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  consent: varchar({ enum: consentOptionsValues }).notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  date: date().notNull(),
  signature: text().notNull(),
});

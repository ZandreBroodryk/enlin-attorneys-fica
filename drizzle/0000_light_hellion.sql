CREATE TABLE "natural_person_fica" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "natural_person_fica_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"email" varchar(255) NOT NULL,
	"fullNames" varchar(255) NOT NULL,
	"saIdNumber" varchar(13),
	"passportNumber" varchar(9),
	"dateOfBirth" date,
	"residencyStatus" varchar,
	"citizenship" varchar(125) NOT NULL,
	"addressOfMainResidence" varchar(255) NOT NULL,
	"maritalStatus" varchar NOT NULL,
	"incomeTaxNr" varchar NOT NULL,
	"contactNumber" varchar(50) NOT NULL,
	"servicesRequired" varchar[] DEFAULT '{}'::text[] NOT NULL,
	"representingAs" varchar,
	CONSTRAINT "natural_person_fica_email_unique" UNIQUE("email"),
	CONSTRAINT "natural_person_fica_saIdNumber_unique" UNIQUE("saIdNumber"),
	CONSTRAINT "natural_person_fica_passportNumber_unique" UNIQUE("passportNumber")
);
--> statement-breakpoint
CREATE TABLE "partnership_fica" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "partnership_fica_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"partnershipTradingName" varchar(255) NOT NULL,
	"natureOfBusiness" varchar(255) NOT NULL,
	"numberOfPartners" integer NOT NULL,
	"placeOfBusiness" varchar(255) NOT NULL,
	"incomeTaxNr" varchar(10) NOT NULL,
	"vatNr" varchar(9) NOT NULL,
	"primaryContactNr" varchar(50) NOT NULL,
	"primaryEmail" varchar(255) NOT NULL,
	"websiteUrl" varchar(2048),
	"servicesRequired" varchar[] DEFAULT '{}'::text[] NOT NULL,
	CONSTRAINT "partnership_fica_primaryEmail_unique" UNIQUE("primaryEmail")
);
--> statement-breakpoint
CREATE TABLE "popia_consent" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "popia_consent_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"consent" varchar NOT NULL,
	"email" varchar(255) NOT NULL,
	"date" date NOT NULL,
	"signature" text NOT NULL,
	CONSTRAINT "popia_consent_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "trust_fica" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "trust_fica_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"trustName" varchar(255) NOT NULL,
	"trustNumber" varchar(255) NOT NULL,
	"courtName" varchar(255) NOT NULL,
	"placeOfBusiness" varchar(255) NOT NULL,
	"incomeTaxNr" varchar(10) NOT NULL,
	"vatNr" varchar(9) NOT NULL,
	"primaryContactNr" varchar(50) NOT NULL,
	"primaryEmail" varchar(255) NOT NULL,
	"websiteUrl" varchar(2048),
	"servicesRequired" varchar[] DEFAULT '{}'::text[] NOT NULL,
	CONSTRAINT "trust_fica_primaryEmail_unique" UNIQUE("primaryEmail")
);

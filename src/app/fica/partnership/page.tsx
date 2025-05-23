"use client";

import {
  partnershipFicaSchema,
  partnershipFicaType,
} from "@/lib/forms/fica-schemas";
import {
  servicesRequiredTrustAndPartnerShipType,
  servicesRequiredTrustAndPartnership,
} from "@/lib/shared";
import { useForm } from "@tanstack/react-form";
import { submitPartnershipForm } from "./actions";
import Loader from "@/components/loader";

export default function PartnershipFicaPage() {
  const initialValues: partnershipFicaType = {
    incomeTaxNr: "",
    placeOfBusiness: "",
    primaryContactNr: "",
    primaryEmail: "",
    servicesRequired: [],
    partnershipTradingName: "",
    natureOfBusiness: "",
    numberOfPartners: 2,
    vatNr: "",
    websiteUrl: "",
  };

  const form = useForm({
    defaultValues: initialValues,
    validators: { onChange: partnershipFicaSchema },
    onSubmit: async ({ value }) => {
      const success = await submitPartnershipForm(value);

      if (typeof success === "string") {
        console.error(success);
      }
    },
  });

  return (
    <div className="flex flex-col place-items-center gap-7 lg:max-w-1/3">
      <h1 className="font-sans text-2xl">Partnership Fica</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-7"
      >
        <form.Field name="partnershipTradingName">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Partnership trading name</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="natureOfBusiness">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>
                  What is the nature of the main business
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="numberOfPartners">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Number Of Partners</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="number"
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="incomeTaxNr">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Income tax number</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="vatNr">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>VAT registration number</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="placeOfBusiness">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Main place of business</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="primaryContactNr">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Primary contact number</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="primaryEmail">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Primary email address</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="email"
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="websiteUrl">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Website, if applicable</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? undefined}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="url"
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="servicesRequired">
          {(field) => (
            <>
              <label htmlFor={field.name}>Services needed</label>
              <select
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                multiple
                onChange={(e) => {
                  const selected = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  );
                  field.handleChange(
                    selected as servicesRequiredTrustAndPartnerShipType[],
                  );
                }}
              >
                {Object.values(servicesRequiredTrustAndPartnership.Values).map(
                  (value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ),
                )}
              </select>
              <p className="text-red-500">
                {field.state.meta.errors
                  .map((error) => error?.message)
                  .join(",")}
              </p>
            </>
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <div className="flex flex-row justify-center gap-6">
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-sm border bg-blue-500 px-2"
              >
                {isSubmitting ? <Loader /> : "Submit"}
              </button>
              <button
                type="reset"
                onClick={() => {
                  const isConfirmed = confirm(
                    "This will clear all entered data are you sure?",
                  );
                  if (isConfirmed) {
                    form.reset();
                  }
                }}
                className="rounded-sm border bg-neutral-300 px-2"
              >
                Reset
              </button>
            </div>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

"use client";

import { trustFicaSchema, trustFicaType } from "@/lib/forms/fica-schemas";
import {
  servicesRequiredTrustAndPartnerShipType,
  servicesRequiredTrustAndPartnership,
} from "@/lib/shared";
import { useForm } from "@tanstack/react-form";

export default function TCompanyFicaPage() {
  const initialValues: trustFicaType = {
    courtName: "",
    incomeTaxNr: "",
    placeOfBusiness: "",
    primaryContactNr: "",
    primaryEmail: "",
    servicesRequired: [],
    trustName: "",
    trustNumber: "",
    vatNr: "",
    websiteUrl: "",
  };

  const form = useForm({
    defaultValues: initialValues,
    validators: { onChange: trustFicaSchema },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });
  return (
    <div className="flex flex-col place-items-center gap-7 lg:max-w-1/3">
      <h1 className="font-sans text-2xl">Company Fica</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-7"
      >
        <form.Field
          name="trustName"
          children={(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Company Name</label>
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
        />
        <form.Field
          name="trustNumber"
          children={(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Company Registration Number</label>
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
        />
        <form.Field
          name="courtName"
          children={(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>
                  Master of High Court where company is registered
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
        />
        <form.Field
          name="placeOfBusiness"
          children={(field) => {
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
        />
        <form.Field
          name="incomeTaxNr"
          children={(field) => {
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
        />
        <form.Field
          name="vatNr"
          children={(field) => {
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
        />
        <form.Field
          name="primaryContactNr"
          children={(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Primary contact number</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="tel"
                />
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        />
        <form.Field
          name="primaryEmail"
          children={(field) => {
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
        />
        <form.Field
          name="websiteUrl"
          children={(field) => {
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
        />
        <form.Field
          name="servicesRequired"
          children={(field) => (
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
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-sm border bg-blue-500"
              >
                {isSubmitting ? "..." : "Submit"}
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
              >
                Reset
              </button>
            </>
          )}
        />
      </form>
    </div>
  );
}

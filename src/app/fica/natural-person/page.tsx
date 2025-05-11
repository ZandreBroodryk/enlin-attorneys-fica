"use client";
import {
  naturalPersonSchema,
  naturalPersonType,
} from "@/lib/forms/fica-schemas";
import {
  residencyStatusType,
  residencyStatus,
  maritalStatusType,
  maritalStatus,
  servicesRequiredNaturalPersonType,
  servicesRequiredNaturalPerson,
} from "@/lib/shared";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { submitNaturalPersonForm } from "./actions";
import Loader from "@/components/loader";

export default function NaturalPersonFicaPage() {
  const [isForeigner, setIsForeigner] = useState<boolean>(false);
  const initialValues: naturalPersonType = {
    addressOfMainResidence: "",
    citizenship: "South African",
    contactNumber: "",
    email: "",
    fullNames: "",
    incomeTaxNr: "",
    maritalStatus: "Unmarried",
    servicesRequired: [],
    dateOfBirth: "",
    passportNumber: "",
    residencyStatus: undefined,
    saIdNumber: "",
    representingAs: "",
  };
  const form = useForm({
    defaultValues: initialValues,
    validators: { onChange: naturalPersonSchema },
    onSubmit: async ({ value }) => {
      const success = await submitNaturalPersonForm(value);

      if (typeof success === "string") {
        console.error(success);
      }
    },
  });

  return (
    <div className="flex flex-col place-items-center gap-7 lg:max-w-1/3">
      <h1 className="font-sans text-2xl">Natural Person Fica</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-7"
      >
        <form.Field name="fullNames">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Full name and surname</label>
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
        <form.Field name="saIdNumber">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>SA ID Number</label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value ?? undefined}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <p className="text-red-500">
                {field.state.meta.errors
                  .map((error) => error?.message)
                  .join(",")}
              </p>
            </div>
          )}
        </form.Field>
        <form.Field name="citizenship">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Citizenship</label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  field.handleChange(e.target.value);
                  setIsForeigner(e.target.value !== "South African");
                }}
              />
              <p className="text-red-500">
                {field.state.meta.errors
                  .map((error) => error?.message)
                  .join(",")}
              </p>
            </div>
          )}
        </form.Field>
        <div className="flex flex-row gap-3">
          <input
            id="foreigner"
            type="checkbox"
            checked={isForeigner}
            onChange={(event) => setIsForeigner(event.target.checked)}
          />
          <label htmlFor="foreigner">Foreigner?</label>
        </div>
        {isForeigner && (
          <>
            <form.Field name="passportNumber">
              {(field) => (
                <div className="flex flex-col">
                  <label htmlFor={field.name}>Passport Number</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value ?? undefined}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <p className="text-red-500">
                    {field.state.meta.errors
                      .map((error) => error?.message)
                      .join(",")}
                  </p>
                </div>
              )}
            </form.Field>
            <form.Field name="dateOfBirth">
              {(field) => (
                <>
                  <label htmlFor={field.name}>Date of Birth</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value ?? undefined}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="date"
                  />
                  <p className="text-red-500">
                    {field.state.meta.errors
                      .map((error) => error?.message)
                      .join(",")}
                  </p>
                </>
              )}
            </form.Field>
            <form.Field name="residencyStatus">
              {(field) => (
                <>
                  <label htmlFor={field.name}>Residency Status</label>
                  <select
                    id={field.name}
                    name={field.name}
                    value={field.state.value ?? undefined}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value as residencyStatusType)
                    }
                  >
                    {Object.values(residencyStatus.Values).map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500">
                    {field.state.meta.errors
                      .map((error) => error?.message)
                      .join(",")}
                  </p>
                </>
              )}
            </form.Field>
          </>
        )}
        <form.Field name="addressOfMainResidence">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>
                Address of your <em>main</em> place of residence
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
          )}
        </form.Field>
        <form.Field name="maritalStatus">
          {(field) => (
            <>
              <label htmlFor={field.name}>Marital Status</label>
              <select
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value as maritalStatusType)
                }
              >
                {Object.values(maritalStatus.Values).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <p className="text-red-500">
                {field.state.meta.errors
                  .map((error) => error?.message)
                  .join(",")}
              </p>
            </>
          )}
        </form.Field>
        <form.Field name="incomeTaxNr">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>
                SA or Foreign Income Tax Number
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
          )}
        </form.Field>
        <form.Field name="contactNumber">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Contact Number</label>
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
          )}
        </form.Field>
        <form.Field name="email">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Email</label>
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
          )}
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
                    selected as servicesRequiredNaturalPersonType[],
                  );
                }}
              >
                {Object.values(servicesRequiredNaturalPerson.Values).map(
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

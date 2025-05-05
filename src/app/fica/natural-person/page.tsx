"use client";
import {
  maritalStatus,
  maritalStatuses,
  naturalPersonSchema,
  naturalPersonType,
  residencyStatus,
  residencyStatuses,
  servicesRequired,
  servicesRequiredType,
} from "@/lib/forms/fica-schemas";
import { useForm } from "@tanstack/react-form";
import { Ref, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function NaturalPersonPage() {
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
    foreigner: undefined,
    saIdNumber: "",
    representingAs: "",
  };
  const form = useForm({
    defaultValues: initialValues,
    validators: { onChange: naturalPersonSchema },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const sigCanvas = useRef<SignatureCanvas>(null);

  return (
    <div className="flex flex-col">
      <h1 className="font-sans text-2xl">Natural Person Fica</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-7"
      >
        <form.Field
          name="fullNames"
          children={(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Full name and surname:</label>
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
          name="saIdNumber"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>SA ID Number:</label>
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
        />
        <form.Field
          name="citizenship"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Citizenship:</label>
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
        />
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
            <form.Field
              name="foreigner.passportNumber"
              children={(field) => (
                <div className="flex flex-col">
                  <label htmlFor={field.name}>Passport Number:</label>
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
            />
            <form.Field
              name="foreigner.dateOfBirth"
              children={(field) => (
                <>
                  <label htmlFor={field.name}>Date of Birth:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
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
            />
            <form.Field
              name="foreigner.residencyStatus"
              children={(field) => (
                <>
                  <label htmlFor={field.name}>Residency Status:</label>
                  <select
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value as residencyStatus)
                    }
                  >
                    {Object.values(residencyStatuses.Values).map((value) => (
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
            />
          </>
        )}
        <form.Field
          name="addressOfMainResidence"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>
                Address of your <em>main</em> place of residence
              </label>
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
        />
        <form.Field
          name="maritalStatus"
          children={(field) => (
            <>
              <label htmlFor={field.name}>Maritial Status:</label>
              <select
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(e.target.value as maritalStatus)
                }
              >
                {Object.values(maritalStatuses.Values).map((value) => (
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
        />
        <form.Field
          name="incomeTaxNr"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>
                SA or Foreign Income Tax Number
              </label>
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
        />
        <form.Field
          name="contactNumber"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Contact Number</label>
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
        />
        <form.Field
          name="email"
          children={(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name}>Email</label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  field.handleChange(e.target.value);
                  setIsForeigner(e.target.value !== "South African");
                }}
                type="email"
              />
              <p className="text-red-500">
                {field.state.meta.errors
                  .map((error) => error?.message)
                  .join(",")}
              </p>
            </div>
          )}
        />
        <form.Field
          name="servicesRequired"
          children={(field) => (
            <>
              <label htmlFor={field.name}>Services needed:</label>
              <select
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                multiple
                onChange={(e) => {
                  console.log(field.state, e.target.value);
                  const selected = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  );
                  field.handleChange(selected as servicesRequiredType[]);
                }}
              >
                {Object.values(servicesRequired.Values).map((value) => (
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
        />
        <SignatureCanvas
          canvasProps={{ className: "bg-neutral-100" }}
          ref={sigCanvas}
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
                    console.log(
                      sigCanvas.current
                        ?.getTrimmedCanvas()
                        .toDataURL("image.png"),
                    );
                    sigCanvas.current?.clear();
                  }
                }}
              >
                Reset
              </button>
            </>
          )}
        />
      </form>
      <button>Help</button>
    </div>
  );
}

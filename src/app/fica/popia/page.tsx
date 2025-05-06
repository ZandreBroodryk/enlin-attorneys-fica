"use client";

import { convertFileToBase64 } from "@/lib/forms/base64";
import { popiaConsentSchema, popiaConsentType } from "@/lib/forms/fica-schemas";
import { consentOptions } from "@/lib/shared";
import { useForm } from "@tanstack/react-form";
import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { submitPopiaForm } from "./actions";

export default function PopiaConsentFicaPage() {
  const [signatureType, setSignatureType] = useState<
    "canvas" | "text" | "file"
  >("canvas");
  const initialValues: popiaConsentType = {
    consent: "No",
    date: "",
    email: "",
    signature: "",
  };

  const form = useForm({
    defaultValues: initialValues,
    validators: { onChange: popiaConsentSchema },
    onSubmit: async ({ value }) => {
      const success = await submitPopiaForm(value);

      if (typeof success === "string") {
        console.error(success);
      }
    },
  });

  const sigCanvas = useRef<SignatureCanvas>(null);
  return (
    <div className="flex flex-col place-items-center gap-7 lg:max-w-1/3">
      <h1 className="text-center font-sans text-2xl">
        Consent in terms of the Protection of Personal Information Act
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex max-w-screen flex-col gap-7"
      >
        <form.Field name="consent">
          {(field) => {
            return (
              <div className="flex flex-col">
                <p>
                  I, the undersigned, hereby agree to provide my/our personal
                  information to Enslin Inc on the express understanding that:
                  This constitutes our consent, as required under Section
                  11(1)(a) of the Protection of Personal Information Act 4 of
                  2013 (“POPI”). Enslin Inc and their staff will have access to
                  our personal details which we/or persons acting on our behalf
                  have furnished them for the purposes of attending to this
                  transaction and/or matter and/or matters ancillary hereto. I
                  hereby authorize Enslin Inc to share my/our personal
                  information to any Institution for the furtherance of my
                  matter. The personal information provided will only be used
                  for the furtherance of my matter. In addition to its POPI
                  compliance, Enslin Inc will store my/our details, as provided
                  for and specified by the Legal Practice Council from time to
                  time. Enslin Inc, as firm of attorneys, has the privilege of
                  confidentiality under the law pertaining to its clients. I
                  hereby consent to receiving Newsletters and/or other useful
                  information from Enslin Inc in the future?
                </p>
                {Object.values(consentOptions.Values).map((option) => (
                  <div key={option} className="fles flex-row gap-3">
                    <input
                      id={field.name}
                      name={field.name}
                      value={option}
                      onBlur={field.handleBlur}
                      checked={field.state.value === option}
                      onChange={() => field.handleChange(option)}
                      type="radio"
                    />
                    <label htmlFor={field.name}>{option}</label>
                  </div>
                ))}
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="date">
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
                  type="date"
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
        <form.Field name="email">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>Email</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="email"
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
        <form.Field name="signature">
          {(field) => {
            return (
              <div className="flex flex-col">
                <label htmlFor={field.name}>
                  Sign Document With Full Name and surname
                </label>
                <div className="flex flex-row gap-3">
                  <input
                    type="radio"
                    name="signatureType"
                    id="signatureType"
                    checked={signatureType == "canvas"}
                    onChange={() => {
                      field.handleChange("");
                      setSignatureType("canvas");
                    }}
                  />
                  <label htmlFor="signatureType">Signature</label>
                  <input
                    type="radio"
                    name="signatureType"
                    id="signatureType"
                    checked={signatureType == "text"}
                    onChange={() => {
                      field.handleChange("");
                      setSignatureType("text");
                    }}
                  />
                  <label htmlFor="signatureType">Text</label>
                  <input
                    type="radio"
                    name="signatureType"
                    id="signatureType"
                    checked={signatureType == "file"}
                    onChange={() => {
                      field.handleChange("");
                      setSignatureType("file");
                    }}
                  />
                  <label htmlFor="signatureType">File Upload</label>
                </div>
                {signatureType === "canvas" && (
                  <div className="flex flex-col gap-3">
                    <SignatureCanvas
                      canvasProps={{
                        className: "bg-neutral-100 max-w-full min-h-[120px]",
                      }}
                      ref={sigCanvas}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const stringContent = sigCanvas.current
                          ?.getTrimmedCanvas()
                          .toDataURL("image/png");

                        field.handleChange(stringContent!);
                      }}
                      className="rounded border p-5"
                    >
                      Capture
                    </button>
                  </div>
                )}
                {signatureType === "text" && (
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type={signatureType}
                    onChange={async (e) => field.handleChange(e.target.value)}
                  />
                )}
                {signatureType === "file" && (
                  <input
                    id={field.name}
                    name={field.name}
                    accept="image/*"
                    className="h-20 rounded bg-neutral-100"
                    onBlur={field.handleBlur}
                    type={signatureType}
                    onChange={async (e) => {
                      const file = e.target.files?.[0] ?? null;

                      if (file) {
                        const text = await convertFileToBase64(file);
                        field.handleChange(text);
                      }
                    }}
                  />
                )}
                <p className="text-red-500">
                  {field.state.meta.errors
                    .map((error) => error?.message)
                    .join(",")}
                </p>
              </div>
            );
          }}
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
                    sigCanvas.current?.clear();
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

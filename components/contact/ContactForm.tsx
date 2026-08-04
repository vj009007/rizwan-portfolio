"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { initialContactFormState } from "@/lib/contact-form-state";
import type { ContactType } from "@/lib/validation/contact";
import { SubmitButton } from "@/components/contact/SubmitButton";

type ContactFormProps = {
  type: ContactType;
  rateOptions?: [string, string];
  budgetPlaceholder?: string;
  onSuccess?: () => void;
};

export function ContactForm({ type, rateOptions, budgetPlaceholder, onSuccess }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialContactFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      onSuccess?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input type="hidden" name="type" value={type} />
      {/* Honeypot */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-group">
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Email" required />
      </div>
      {rateOptions && (
        <div className="form-group">
          <select className="form-select" name="rateType" aria-label="Select Method" defaultValue={rateOptions[0]}>
            <option value={rateOptions[0]}>{rateOptions[0]}</option>
            <option value={rateOptions[1]}>{rateOptions[1]}</option>
          </select>
        </div>
      )}
      {budgetPlaceholder && (
        <div className="form-group">
          <input name="budget" placeholder={budgetPlaceholder} type="text" />
        </div>
      )}
      <div className="form-group">
        <textarea name="message" placeholder="Offer Letter" required minLength={10} />
      </div>

      {state.status === "success" && <p className="mb-16">{state.message}</p>}
      {state.status === "error" && <p className="mb-16">{state.message}</p>}

      <div className="bix-review-buttons">
        <SubmitButton />
        <button type="button" className="bix-button" data-bs-dismiss="modal" aria-label="Close">
          Close
        </button>
      </div>
    </form>
  );
}

"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="bix-button" disabled={pending}>
      {pending ? "Sending..." : "Submit"}
    </button>
  );
}

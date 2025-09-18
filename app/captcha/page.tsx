"use client";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function CaptchaPage() {
  const [solved, setSolved] = useState(false);

  const handleSuccess = (token: string) => {
    document.cookie = `turnstile_token=${token}; path=/; max-age=3600`;
    setSolved(true);
    window.location.href = "/"; // redirect to homepage
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl mb-4">Please verify you are human</h1>
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!}
        onSuccess={handleSuccess}
      />
      {solved && <p>Verification complete, redirecting...</p>}
    </div>
  );
}

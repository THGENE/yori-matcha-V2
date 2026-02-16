"use client";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setMessage(error.message || "Erreur lors du paiement");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {message && <p className="text-red-400 text-sm">{message}</p>}

      <button
        disabled={!stripe || loading}
        className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-neutral-200 transition disabled:opacity-50"
      >
        {loading ? "Paiement en cours..." : "Payer maintenant"}
      </button>
    </form>
  );
}

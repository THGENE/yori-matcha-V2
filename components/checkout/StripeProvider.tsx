"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function StripeProvider({ children, publishableKey }) {
  const stripe = loadStripe(publishableKey);

  return (
    <Elements
      stripe={stripe}
      options={{
        mode: "payment",
        currency: "eur",
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#ffffff",
            colorBackground: "#000000",
            colorText: "#ffffff",
            colorDanger: "#ff4d4d",
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}

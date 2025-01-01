import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import SSLPayment from "./ssl-payment";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [method, setMethod] = useState("stripe");

  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>

      <select
        onChange={(e) => setMethod(e.target.value)}
        className="select select-bordered w-full max-w-xs my-10"
      >
        <option value="stripe">Stripe</option>
        <option value="ssl">SSL Commerze</option>
      </select>

      {method == "stripe" ? (
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
      ) : (
        <SSLPayment></SSLPayment>
      )}
    </div>
  );
};

export default Payment;

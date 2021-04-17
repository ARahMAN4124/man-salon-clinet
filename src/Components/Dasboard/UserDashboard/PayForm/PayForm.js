import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PayForm = ({ paymentOrder, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      alert(error);
    } else {
      paymentOrder(paymentMethod.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <div className="text-end mt-3">
          <button type="submit" className="btn btn-warning" disabled={!stripe}>
            Buy Now ${price}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayForm;

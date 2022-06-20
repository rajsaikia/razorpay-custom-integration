import React, { useEffect } from "react";

function PaymentButton({amount = 100, name = 'raj saikia', contact = '8860430262',
  email = 'raj.scyrus@gmail.com', address = 'Tezpur, Assam, India 784001'}) {
  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: amount, //  = INR 1
    name: "Acme Company",
    description: "Acme Company payment mode",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function(response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: name,
      contact: contact,
      email: email
    },
    notes: {
      address: address
    },
    theme: {
      color: "#F37254",
      hide_topbar: false
    }
  };

  const openPayModal = options => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <button onClick={() => openPayModal(options)}>Pay</button>
    </>
  );
}

export default PaymentButton;

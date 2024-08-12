import { PaymentForm, CreditCard, CashAppPay } from 'react-square-web-payments-sdk';
import { CREATE_PAYMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export default function Payment() {
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paidAmount, setPaidAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePayment = async (token) => {
    const response = await createPayment({
      variables: {
        input: {
          sourceId: token.token,
          amount: Math.round(Number(amount) * 100),
        },
      },
    });
    console.log('Payment Response:', response.data.createPayment);

    setPaidAmount(amount);
    setPaymentSuccess(true);
    setAmount('');
  };

  const handleNewPayment = () => {
    setPaymentSuccess(false);
    setPaidAmount('');
  };

  return (
    <div className="center-content">
      {paymentSuccess ? (
        <div className="confirmation-message">
          <h2>Payment Sent</h2>
          <p>You have successfully sent a payment of ${paidAmount}</p>
          <button onClick={handleNewPayment}>Make Another Payment</button>
        </div>
      ) : (
        <>
          <h3>Make Your Donation</h3>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
          <PaymentForm
            applicationId="sandbox-sq0idb-LLOq0Nnt-Iqh5kq1D2FAFg"
            cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
              await handlePayment(token);
            }}
            createPaymentRequest={() => ({
              countryCode: 'US',
              currencyCode: 'USD',
              total: {
                amount: amount,
                label: 'Total',
              },
            })}
            locationId="LJY21PZWVHMJZ"
          >
            <CreditCard />
          </PaymentForm>
        </>
      )}
    </div>
  );
}
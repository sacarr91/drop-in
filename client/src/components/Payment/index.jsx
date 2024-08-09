import { PaymentForm, CreditCard, CashAppPay } from 'react-square-web-payments-sdk';
import { CREATE_PAYMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react'

export default function Payment() {
  const [createPayment] = useMutation(CREATE_PAYMENT);
  const [amount, setAmount] = useState('');

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
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      <PaymentForm
        applicationId="sandbox-sq0idb-LLOq0Nnt-Iqh5kq1D2FAFg"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          handlePayment(token);
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
        <CashAppPay />
      </PaymentForm>
    </div>
  );
}
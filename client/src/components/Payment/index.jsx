import { PaymentForm, CreditCard, CashAppPay } from 'react-square-web-payments-sdk';
import { Client } from 'square';
import { CREATE_PAYMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function Payment() {
  const [createPayment] = useMutation(CREATE_PAYMENT);

  return (
    <div>
      <PaymentForm
        applicationId="sandbox-sq0idb-LLOq0Nnt-Iqh5kq1D2FAFg"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await createPayment({
            variables: {
              input: {
                sourceId: token.token,
                amount: 100, // Example amount in cents
              },
            },
          });
          console.log('Payment Response:', response.data.createPayment);
        }}
        createPaymentRequest={() => ({
          countryCode: 'US',
          currencyCode: 'USD',
          total: {
            amount: '1.00',
            label: 'Total',
          },
        })}
        locationId="LJY21PZWVHMJZ"
      >
        <CashAppPay />
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
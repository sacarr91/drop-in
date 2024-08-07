import { PaymentForm, CreditCard, CashAppPay } from 'react-square-web-payments-sdk';
import { Client } from 'square';
// import { randomUUID } from 'crypto';

// const { paymentsApi } = new Client({
//     accessToken: process.env.SQUARE_ACCESS_TOKEN,
//     environment: 'sandbox'
//   });

//   export default async function handler(req, res) {
//     if ( req.method === 'POST' ) {
//       const { result } = await paymentsApi.createPayment({
//         idempotencyKey: randomUUID(),
//         sourceId: req.body.sourceId,
//         amountMoney: {
//           currency: 'USD',
//           amount: 100
//         }
//       })
//       console.log(result);
//       res.status(200).json(result);
//     } else {
//       res.status(500).send();
//     }
//   }



export default function Payment() {
  return (
    <div>
      <PaymentForm
        applicationId="sandbox-sq0idb-LLOq0Nnt-Iqh5kq1D2FAFg"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
            console.log('token:', token);
            console.log('verifiedBuyer:', verifiedBuyer);
          }}
          createPaymentRequest={() => ({
            countryCode: "US",
            currencyCode: "USD",
            total: {
              amount: "1.00",
              label: "Total",
            },
          })}
        locationId='LJY21PZWVHMJZ'
      >
        <CashAppPay />
      </PaymentForm>
    </div>
  )
};
export interface IPaymentMethodData {
  method: string;
}
export const paymentMethodData = [
  {
    method: "Cash after delivery",
  },
  {
    method: "Card",
  },
];

export const method = Object.keys(paymentMethodData);

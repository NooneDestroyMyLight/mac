export interface IPaymentMethodData {
  method: string;
}

export const paymentMethodData: IPaymentMethodData[] = [
  {
    method: "Cash after delivery",
  },
  {
    method: "Card",
  },
];

export const paymentMethod: keyof IPaymentMethodData = "method";

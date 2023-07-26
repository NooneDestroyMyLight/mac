"use client";
import { FC, ReactNode } from "react";
import style from "./PaymentItem.module.scss";
import { IPaymentMethodData } from "./paymentItem.data";

interface DropdownItem {
  children?: ReactNode;
  array: IPaymentMethodData[];
  property: keyof IPaymentMethodData;
}

const DropdownItem: FC<DropdownItem> = ({ array, property, children }) => {
  return (
    <div className={style.itemsList}>
      {children}
      {array.map(item => (
        <button className={style.dropdownItem}>{item[property]}</button>
      ))}
    </div>
  );
};
export default DropdownItem;

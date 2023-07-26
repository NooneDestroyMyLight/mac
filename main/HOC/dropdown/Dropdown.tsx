"use client";
import { FC, ReactNode, useRef, useState } from "react";
import style from "./Dropdown.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";

import { IPaymentMethodData } from "@/componentscheckout/paymentSection/paymentItem/paymentItem.data";

interface IDropdownItem {
  active: boolean;
  children?: ReactNode;
  array: IPaymentMethodData[]; //Add
  property: keyof IPaymentMethodData;
}

const Dropdown: FC<IDropdownItem> = ({ active, array, property, children }) => {
  return (
    <div
      className={
        active ? `${style.dropdown} ${style.activeDropdown}` : style.dropdown
      }
    >
      <div className={style.itemsList}>
        {children}
        {array.map(item => (
          <button className={style.dropdownItem}>{item[property]}</button>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;

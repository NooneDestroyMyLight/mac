import { FC, ReactNode, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import style from "./Selector.module.scss";

// import { IPaymentMethodData } from "@/componentscheckout/paymentSection/paymentItem.data";
// import { IUserAddressData } from "@/componentscheckout/deliverySection/userAddreess.data";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit/dist/createAction";
import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

export interface IDropdown<T> {
  children?: ReactNode;
  selectorValue: string; //currentValue
  // setSelectorValue: ActionCreatorWithPayload<
  //   IUserAddress,
  //   "googleMap/setCurrentAddress"
  // >;
  iconSrc?: string;
  placeholder?: string;
}

const Selector: FC<IDropdown<any>> = ({
  children,
  selectorValue,
  iconSrc,
  placeholder,
}) => {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const ref = useOnclickOutside(() => {
    setDropDownOpen(false);
  });

  return (
    <li
      ref={ref}
      className={style.selector}
      onClick={e => {
        setDropDownOpen(!isDropDownOpen);
      }}
    >
      <div className={style.inputContainer}>
        {iconSrc && (
          <div className={style.InputIcon}>
            <img src={iconSrc} alt="Icon" />
          </div>
        )}
        <input
          type="text"
          value={selectorValue}
          placeholder={placeholder ? placeholder : ""}
          readOnly
          className={style.selectorInput}
        />
        <div
          className={`${style.selectorIcon} ${
            isDropDownOpen && style.selectorIconActive
          }`}
        ></div>
      </div>
      {isDropDownOpen ? (
        <div
          className={
            isDropDownOpen
              ? `${style.dropdown} ${style.activeDropdown}`
              : style.dropdown
          }
        >
          <div className={style.itemsList}>{children}</div>
        </div>
      ) : null}
    </li>
  );
};

export default Selector;

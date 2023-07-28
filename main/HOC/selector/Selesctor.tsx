import { FC, ReactNode, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import style from "./Selector.module.scss";

import { IPaymentMethodData } from "@/componentscheckout/paymentSection/paymentItem.data";
import { IUserAddressData } from "@/componentscheckout/deliverySection/userAdressInfo/userAddreess.data";

export interface IDropdown<T> {
  children?: ReactNode;
  array: T[]; //Add
  property: keyof T;
  selectorValue: string; //currentValue
}

const Selector: FC<IDropdown<any>> = ({
  array,
  property,
  children,
  selectorValue,
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
      <input
        type="text"
        value={selectorValue}
        readOnly
        className={style.selectorInput}
      />
      <div
        className={`${style.selectorIcon} ${
          isDropDownOpen ? style.selectorIconActive : null
        }`}
      ></div>
      {isDropDownOpen ? (
        <div
          className={
            isDropDownOpen
              ? `${style.dropdown} ${style.activeDropdown}`
              : style.dropdown
          }
        >
          <div className={style.itemsList}>
            {children}
            {array.map(item => (
              <button key={item[property]} className={style.dropdownItem}>
                {item[property]}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default Selector;

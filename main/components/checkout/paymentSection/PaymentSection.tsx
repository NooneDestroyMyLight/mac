import { FC, useState } from "react";
import style from "./PaymentSection.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";

import Dropdown from "../../../HOC/dropdown/Dropdown";

import PaymentItem from "./paymentItem/PaymentItem";

import { paymentMethodData } from "./paymentItem/paymentItem.data";

const PaymentSection: FC = () => {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const ref = useOnclickOutside(() => {
    setDropDownOpen(false);
  });

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>3</div> Payment
        </div>
        <ul className={style.paymentSelectContainer}>
          <li
            ref={ref}
            className={style.selector}
            onClick={e => {
              setDropDownOpen(!isDropDownOpen);
            }}
          >
            <input type="text" value="Selector" readOnly />
            <div
              className={`${style.selectorIcon} ${
                isDropDownOpen ? style.selectorIconActive : null
              }`}
            ></div>
            {isDropDownOpen ? (
              <Dropdown
                active={isDropDownOpen}
                array={paymentMethodData}
                property="method"
              ></Dropdown>
            ) : null}
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PaymentSection;

import { FC, useState } from "react";
import style from "./PaymentSection.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";

import { paymentMethodData } from "./paymentItem.data";

import Selector from "../../../HOC/selector/Selesctor";

import { paymentMethod } from "./paymentItem.data";

const PaymentSection: FC = () => {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  // const ref = useOnclickOutside(() => {
  //   setDropDownOpen(false);
  // });

  return (
    <section className={style.section}>
      <div className={style.sectionContainer}>
        <div className={style.sectionTitle}>
          <div className={style.sectionNumber}>3</div> Payment
        </div>
        <ul className={style.paymentSelectContainer}>
          <Selector
            array={paymentMethodData}
            property={paymentMethod}
            selectorValue="Choose payment method... "
            iconSrc="/images/icon/payIcon.png"
          />
          <li className={style.inputColumn}>
            <span className={style.uperInputText}>Have a promo code?</span>
            <input type="text" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PaymentSection;

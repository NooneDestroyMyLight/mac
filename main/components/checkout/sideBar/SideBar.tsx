import { FC } from "react";
import style from "./SideBar.module.scss";

import Image from "next/image";
interface IsideBar {
  totalАmountСost: number;
  submitCheckout: () => void;
}

const Sidebar: FC<IsideBar> = ({ totalАmountСost, submitCheckout }) => {
  //Add with delivery considering delivery price
  return (
    <section className={style.sideBarContainer}>
      <div className={style.title}>
        Total
        <Image
          className={style.LupeImg}
          src="/images/totalCostSideBarIcon1.png"
          width={50}
          height={50}
          alt="foodIcon"
        />
      </div>
      <ul className={style.info}>
        <li className={style.infoEl}>
          <span>Product</span>
          <span className={style.cost}>
            {" "}
            {new Intl.NumberFormat("uk-UA").format(totalАmountСost)}₴
          </span>
        </li>
        <li className={style.infoEl}>
          <span>Delivery</span>
          <span className={style.cost}>10₴</span>
        </li>
        <li className={style.infoEl}>
          <strong className={style.totalAmount}>Total Amount</strong>
          <strong className={style.totalAmount}>
            {new Intl.NumberFormat("uk-UA").format(totalАmountСost)}₴
          </strong>
        </li>
        <li className={style.infoEl}>
          <span className={style.discription}>
            MacDonald acts as an intermediary in the transaction between you,
            the collateral and the provider of the delivery service. Confirming,
            you accept our Rules and understand and give us permission to
            complete the engagement.
          </span>
        </li>
      </ul>
      <button onClick={() => submitCheckout()}>Confirm order</button>
    </section>
  );
};
export default Sidebar;

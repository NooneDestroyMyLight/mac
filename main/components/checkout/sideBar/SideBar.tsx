import { FC } from "react";
import style from "./SideBar.module.scss";

interface IsideBar {
  //PRops
}

const Sidebar: FC<IsideBar> = ({}) => {
  return (
    <section className={style.sideBarContainer}>
      <div className={style.title}>Total image</div>
      <ul className={style.info}>
        <li className={style.infoEl}>
          <span>Product</span>
          <span className={style.cost}>100₴</span>
        </li>
        <li className={style.infoEl}>
          <span>Delivery</span>
          <span className={style.cost}>10₴</span>
        </li>
        <li className={style.infoEl}>
          <strong>Amount</strong>
          <strong>1000₴</strong>
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
      <button>confirm order</button>
    </section>
  );
};
export default Sidebar;

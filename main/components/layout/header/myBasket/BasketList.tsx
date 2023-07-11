"use client";
import { FC } from "react";
import style from "./BasketList.module.scss";
import { useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import BasketItem from "./basketItem/BasketItem";
import { IbasketItem } from "./basketItem/basketI.interface";

const Basket: FC = () => {
  const { cart: cartArray } = useTypedSelector(state => state.basket);
  const [isOpen, setOpen] = useState(false);
  //add if cartArray is empty some info about that CART EMTY

  return (
    <div className={style.content}>
      <div className={style.basket}>
        <button onClick={e => (!isOpen ? setOpen(true) : setOpen(false))}>
          My Basket
        </button>
        <ul className={`${style.dropdown} ${isOpen ? style.open : null}`}>
          <li className={style.container}>
            {cartArray.map(item => (
              <BasketItem key={item.imageSrc} product={item} />
            ))}
          </li>
          <li className={style.totalcost}>
            <div className={style.cost}>1 400₴</div>
            <button>checkout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Basket;

"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import style from "./Basket.module.scss";

import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";

import { IBasketItem } from "./basketItem/basketI.interface";

import BasketList from "./basketList/BasketList";
import BasketTotalCost from "./basketTotalCost/BasketTotalCost";

const Basket: FC = () => {
  const { setTotalAmountCost } = useActions();
  const { cart: cartArray, totalАmountСost } = useTypedSelector(
    state => state.basket
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const dropdownMenu = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handler = (e: MouseEvent) => {
  //     if (!dropdownMenu.current?.contains(e.target as Node))
  //       setDropdownOpen(false);
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  useEffect(() => {
    setTotalAmountCost(
      cartArray.reduce(
        (total: number, item: IBasketItem) => total + item.price * item.count,
        0
      )
    );
  }, [cartArray]);

  return (
    <div className={style.wrapperBasket}>
      <ul className={style.title}>
        {cartArray.length > 0 && !isDropdownOpen ? (
          <li className={`${style.countProductInBasket} ${style.show}`}>
            <span>{cartArray.length}</span>
          </li>
        ) : null}
        <button onClick={e => setDropdownOpen(!isDropdownOpen)}>
          My Basket
        </button>
      </ul>
      <ul className={`${style.dropdown} ${isDropdownOpen ? style.open : null}`}>
        <BasketList cartArray={cartArray} />
        <li className={style.totalcost}>
          <BasketTotalCost totalАmountСost={totalАmountСost} />
          <Link href={"/checkout"}>
            <button disabled={cartArray.length === 0 ? true : false}>
              checkout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Basket;

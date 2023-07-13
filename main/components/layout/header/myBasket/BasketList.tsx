"use client";
import { FC, useEffect, useRef } from "react";
import style from "./BasketList.module.scss";

import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useState } from "react";

import BasketItem from "./basketItem/BasketItem";
import { IBasketItem } from "./basketItem/basketI.interface";
import Link from "next/link";

const Basket: FC = () => {
  const { cart: cartArray } = useTypedSelector(state => state.basket);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [totalCost, setTotalcost] = useState(0);

  useEffect(() => {
    setTotalcost(
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
        <button
          onClick={e =>
            !isDropdownOpen ? setDropdownOpen(true) : setDropdownOpen(false)
          }
        >
          My Basket
        </button>
        {/* <button className={style.basketIcon}></button> */}
      </ul>
      <ul className={`${style.dropdown} ${isDropdownOpen ? style.open : null}`}>
        <li className={style.itemsList}>
          {cartArray.length === 0 ? (
            <div className={style.emptyBasket}>Your basket is Empty</div>
          ) : (
            cartArray.map(item => (
              <BasketItem key={item.imageSrc} product={item} />
            ))
          )}
        </li>
        <li className={style.totalcost}>
          <div className={style.cost}>{totalCost}₴</div>
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

"use client";
import { FC } from "react";
import style from "./BasketItem.module.scss";

import { IBasketItem } from "./basketI.interface";
import { useActions } from "@/hooksuseActions";

import BasketProductImage from "./basketImage/BasketProductImage";

interface IProductItem {
  product: IBasketItem;
}

const BasketItem: FC<IProductItem> = ({ product }) => {
  const { addOneMoreProduct, removeOneProduct, removeFromCart } = useActions();
  const { imageSrc, alt, name, price, count } = product;

  return (
    <div className={style.basketItemWrapper}>
      <BasketProductImage alt={alt} imageSrc={imageSrc} />
      <ul className={style.info}>
        <li className={style.title}>
          <span>{name}</span>
        </li>
        <li className={style.count}>
          <section className={style.operation}>
            <div className={style.price}>{price + "₴"}</div>
            <button
              onClick={e => removeOneProduct(product)}
              className={style.countButton}
            >
              -
            </button>
            {count}x
            <button
              onClick={e => addOneMoreProduct(product)}
              className={style.countButton}
            >
              +
            </button>
          </section>
          <button
            onClick={e => removeFromCart(product)}
            className={style.removeButton}
          ></button>
        </li>
      </ul>
    </div>
  );
};
export default BasketItem;

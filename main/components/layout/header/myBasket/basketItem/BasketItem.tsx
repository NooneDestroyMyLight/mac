"use client";
import { FC } from "react";
import style from "./BasketItem.module.scss";

import { IBasketItem } from "./basketI.interface";
import { useActions } from "@/hooksuseActions";

interface IProductItem {
  product: IBasketItem;
}

const BasketItem: FC<IProductItem> = ({ product }) => {
  const { addOneMoreProduct, removeOneProduct, removeFromCart } = useActions();
  const {
    imageSrc,
    alt,
    name,
    calories,
    totalWeight,
    totalFat,
    totalCarbs,
    protein,
    price,
    count,
  } = product;

  return (
    <div className={style.basketItemWrapper}>
      <div className={style.image}>
        <img src={imageSrc} alt={alt} />
      </div>
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
            {count}
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

"use client";
import { FC } from "react";
import style from "./BasketItem.module.scss";

import { IbasketItem } from "./basketI.interface";
import { useActions } from "../../../../../hooks/useActions";

interface IproductItem {
  product: IbasketItem;
}

const BasketItem: FC<IproductItem> = ({ product }) => {
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
    <div className={style.container}>
      <div className={style.image}>
        <img src={imageSrc} alt={alt} />
      </div>
      <ul className={style.info}>
        <li className={style.title}>{name}</li>
        <li className={style.count}>
          <div className={style.price}>{price + "₴"}</div>
          <div className={style.operation}>
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
            <button
              onClick={e => removeFromCart(product)}
              className={style.removeButton}
            ></button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default BasketItem;

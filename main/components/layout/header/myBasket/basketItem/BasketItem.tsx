"use client";
import { FC } from "react";
import style from "./BasketItem.module.scss";

import { Iproduct } from "../../../../products/productList/productI.interface";
import { useActions } from "../../../../../hooks/useActions";

interface IproductItem {
  product: Iproduct;
}

const BasketItem: FC<IproductItem> = ({ product }) => {
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
  } = product;
  const { removeFromCart } = useActions();
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
            <button className={style.countButton}>-</button>1
            <button className={style.countButton}>+</button>
            <button
              onClick={e => removeFromCart(product)}
              className={style.removeButton}
            ></button>
          </div>
        </li>
      </ul>
      {/* <div className={style.info}></div> */}
      {/* <button className={style.button}></button>1
        <button className={style.button}></button>
        <div className={style.remove}>remove</div> */}
    </div>
  );
};
export default BasketItem;

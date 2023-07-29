"use client";
import { FC } from "react";
import style from "./BasketItem.module.scss";

import { useActions } from "@/hooksuseActions";

import BasketProductImage from "./basketImage/BasketProductImage";
import OperationButton from "../../basketItem/operationButton/OperationButton";

import { IBasketItem } from "./basketI.interface";
interface IProductItem {
  product: IBasketItem;
}

const BasketItem: FC<IProductItem> = ({ product }) => {
  const { removeFromCart } = useActions();
  const { imageSrc, alt, name, price } = product;

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
            <OperationButton product={product} />
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

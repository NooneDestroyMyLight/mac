"use client";
import { FC } from "react";
import style from "./OrderProductItem.module.scss";

import BasketProductImage from "../../layout/header/myBasket/basketItem/basketImage/BasketProductImage";

import { IBasketItem } from "@/componentslayout/header/myBasket/basketItem/basketI.interface";

interface IOrderProductItem {
  product: IBasketItem;
}

const OrderProductItem: FC<IOrderProductItem> = ({ product }) => {
  const { name, alt, price, count, imageSrc, subTotal } = product;
  return (
    <div className={style.container}>
      <div className={style.productImageAndName}>
        <div className={style.image}>
          <BasketProductImage imageSrc={imageSrc} alt={alt} />
        </div>
        <div className={style.productName}>{name}</div>
      </div>
      <div className={style.productOrderItemInfo}>
        <ul>
          <span>price</span>
          <li>{new Intl.NumberFormat("uk-UA").format(price)}₴</li>
        </ul>
        <ul>
          <span>count</span>
          <li>{count}</li>
        </ul>
        <ul>
          <span>subTotal</span>
          <li>{new Intl.NumberFormat("uk-UA").format(subTotal)}₴</li>
        </ul>
      </div>
    </div>
  );
};
export default OrderProductItem;

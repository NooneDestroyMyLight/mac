"use client";
import { FC, useState, useEffect, useRef } from "react";
import { MouseEvent } from "react";

import style from "./ProductItem.module.scss";
import Image from "next/image";

import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";

import useOnclickOutside from "react-cool-onclickoutside";

import { IDrinks, Iproduct } from "../../../../types/productI.interface";
import ItemDiscription from "./itemDiscription/itemDiscription";

interface IproductsItems {
  product: Iproduct | IDrinks;
}

const Product: FC<IproductsItems> = ({ product }) => {
  const { imageSrc, alt, name, price, compaund, ingredients, onFocus } =
    product;
  const { addToCart, focusCurrentProduct, removeFocusCurrentProduct } =
    useActions();
  const isOnCartCheack = useTypedSelector(
    state => state.basket.cart.filter(item => item.name === product.name) //Does product Already in Basket
  );

  const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); //Probable can be a problem
    addToCart(product);
  };

  const productRef = useOnclickOutside(() => {
    if (onFocus) {
      removeFocusCurrentProduct();
    }
  });

  const onActiveProduct = (e: MouseEvent<HTMLDivElement>) => {
    onFocus
      ? removeFocusCurrentProduct()
      : focusCurrentProduct({ onFocus: false, name: name });
  };

  return (
    <div
      ref={productRef}
      className={`${style.productContainer} ${onFocus ? style.active : null}`}
      onClick={e => onActiveProduct(e)}
    >
      <div className={style.imageContainer}>
        <div className={style.image}>
          <Image src={imageSrc} alt={alt} width={200} height={200} />
        </div>
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <span>{name}</span>
        </div>
        {!onFocus ? (
          <div className={style.description}>
            <span> Discription:</span>
            <br /> {ingredients}
          </div>
        ) : (
          compaund && <ItemDiscription compaund={compaund} />
        )}
        <div className={style.price}>{price}₴</div>
        <button
          disabled={isOnCartCheack.length === 0 ? false : true}
          onClick={e => onAddToCartClick(e)}
          className={style.button}
        >
          {isOnCartCheack.length === 0 ? "ADD TO BASKET" : "AlREADY IN BASKET"}
        </button>
      </div>
    </div>
  );
};
//Need add USESTATE to isOnCART
export default Product;

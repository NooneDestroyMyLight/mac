"use client";
import { FC, useState } from "react";
import style from "./ProductItem.module.scss";

import Image from "next/image";
import { Iproduct } from "../productI.interface";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { RootState } from "@/app/globalRedux/store";
import { useActions } from "../../../../hooks/useActions";
import { flattenDiagnosticMessageText } from "typescript";

interface IproductsItems {
  product: Iproduct;
}

const Product: FC<IproductsItems> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const { addToCart } = useActions();
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
  const isOnCart = useTypedSelector(state =>
    state.basket.cart.filter(item => item.name === product.name)
  );

  console.log(isOnCart ? true : false);
  console.log(isOnCart);
  return (
    <div
      onClick={e => (!open ? setOpen(true) : setOpen(false))}
      className={`${style.product} ${open ? style.active : null}`}
    >
      <div className={style.image}>
        <Image src={imageSrc} alt={alt} width={200} height={200} />
      </div>
      <div className={style.title}>{name}</div>

      {!open ? (
        <div className={style.description}>
          <ul>
            <li>Calories</li>
            <li>{calories} Cal</li>
          </ul>
          <ul>
            <li>Total Weight</li>
            <li>{totalWeight}g</li>
          </ul>
          <ul>
            <li className={style.sabDescription}>Total Fat</li>
            <li>{totalFat}g</li>
          </ul>
          <ul>
            <li className={style.sabDescription}>Total Carbs</li>
            <li>{totalCarbs}g</li>
          </ul>
          <ul>
            <li className={style.sabDescription}>Protein</li>
            <li>{protein}g</li>
          </ul>
        </div>
      ) : null}
      {open ? (
        <div className={style.description}>
          <span>Ingredients:</span>
          <br /> Regular Bun 100%, Beef Patty, Ketchup, Pickle Slices, Onions,
          Mustard
        </div>
      ) : null}

      <div className={style.price}>{price}₴</div>
      <button
        disabled={isOnCart.length === 0 ? false : true}
        onClick={e => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation(); //Probable can be a problem
          addToCart(product);
        }}
        className={style.button}
      >
        {isOnCart.length === 0 ? "ADD TO BASKET" : "AlREADY IN BASKET"}
      </button>
    </div>
  );
};

export default Product;

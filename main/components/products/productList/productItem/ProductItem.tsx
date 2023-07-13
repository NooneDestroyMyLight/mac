"use client";
import { FC, useState } from "react";
import style from "./ProductItem.module.scss";
import Image from "next/image";

import { Iproduct } from "../../../../types/productI.interface";
import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";

interface IproductsItems {
  product: Iproduct;
}

const Product: FC<IproductsItems> = ({ product }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { addToCart } = useActions();
  const isOnCart = useTypedSelector(state =>
    state.basket.cart.filter(item => item.name === product.name)
  );

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

  return (
    <div
      onClick={e => (!open ? setOpen(true) : setOpen(false))}
      className={`${style.product} ${open ? style.active : null}`}
    >
      <div className={style.image}>
        <Image src={imageSrc} alt={alt} width={200} height={200} />
      </div>
      <div className={style.title}>
        <span>{name}</span>
      </div>

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
      ) : (
        <div className={style.description}>
          <span>Ingredients:</span>
          <br /> Regular Bun 100%, Beef Patty, Ketchup, Pickle Slices, Onions,
          Mustard
        </div>
      )}

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
//Need add USESTATE to isOnCART
export default Product;

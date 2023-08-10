"use client";
import { FC, useState } from "react";
import { MouseEvent } from "react";

import style from "./ProductItem.module.scss";

import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";

import useOnclickOutside from "react-cool-onclickoutside";

import {
  IDrinks,
  Iproduct,
  TSizeRange,
} from "../../../../types/productI.interface";
import ItemDiscription from "./itemDiscription/itemDiscription";
import SizeDropdown from "./sizeDropdown/SizeDropdown";

interface IproductsItems {
  product: Iproduct | IDrinks;
}

const Product: FC<IproductsItems> = ({ product }) => {
  const { imageSrc, alt, name, price, compaund, ingredients, onFocus } =
    product;

  let sizeRange;
  if ("sizeRange" in product) {
    sizeRange = product.sizeRange;
    const [sizeRangeArr, setSizeRangeArr] = useState<TSizeRange[]>(sizeRange);
  }

  const { addToCart, focusCurrentProduct, removeFocusCurrentProduct } =
    useActions();

  const isOnCartCheack = useTypedSelector(
    state => state.basket.cart.filter(item => item.name === product.name) //Does product Already in Basket
  );

  const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
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
      <div className={style.info}>
        <div className={style.infoContent}>
          <div className={style.title}>
            <span>{name}</span>
          </div>
          {!onFocus ? (
            <div className={style.imageContainer}>
              <div className={style.image}>
                <img src={imageSrc} alt={alt} width={200} height={200} />
              </div>
              {/* compaund && <ItemDiscription compaund={compaund} /> */}
            </div>
          ) : (
            <div className={style.description}>
              <span> Discription:</span>
              <br /> {ingredients}
            </div>
          )}
        </div>
        <div className={style.price}>
          {price}₴
          {sizeRange && (
            <SizeDropdown
              totalWeight={compaund.totalWeight}
              sizeRange={sizeRange}
            />
          )}
        </div>
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

export default Product;

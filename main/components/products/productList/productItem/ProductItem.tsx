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

import ChooseSize from "./chooseSize/ChooseSize";

interface IproductsItems {
  product: Iproduct | IDrinks;
}

const Product: FC<IproductsItems> = ({ product }) => {
  const { imageSrc, alt, name, price, totalWeight, ingredients, onFocus } =
    product;
  const { addToCart, focusCurrentProduct, removeFocusCurrentProduct } =
    useActions();

  let sizeRange: TSizeRange[] | undefined;
  if ("sizeRange" in product) {
    sizeRange = product.sizeRange;
  }

  const [productCurrentSize, setproductCurrentSize] = useState<TSizeRange>({
    size: "Defualt value", // defualt value that don't be undefined
    price: 0, //defualt value that don't be undefined
  });

  const isOnCartCheack = useTypedSelector(state =>
    state.basket.cart.filter(item =>
      "sizeRange" in product
        ? item.name === product.name + ` ${productCurrentSize.size}L`
        : item.name === product.name
    )
  );

  const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
    let copyProduct = { ...product };
    if ("sizeRange" in product) {
      copyProduct = {
        ...copyProduct,
        totalWeight: productCurrentSize.size,
        price: productCurrentSize.price,
      };
    }
    e.stopPropagation();
    addToCart(copyProduct);
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
          {sizeRange ? (
            <ChooseSize
              sizeRange={sizeRange}
              setproductCurrentSize={setproductCurrentSize}
            />
          ) : (
            <>
              {price}₴
              <div className={style.weightAndDropdown}>
                <span>{totalWeight}</span>
              </div>
            </>
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

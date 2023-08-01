import { FC } from "react";
import style from "./BasketList.module.scss";

import BasketItem from "../basketItem/BasketItem";

import { IBasketItem } from "../basketItem/basketI.interface";
interface IBasketList {
  cartArray: IBasketItem[];
}


const BasketList: FC<IBasketList> = ({ cartArray }) => {
  return (
    <div className={style.basketListContainer}>
      <div className={style.itemsList}>
        {cartArray.length === 0 ? (
          <div className={style.emptyBasket}>Your basket is Empty</div>
        ) : (
          cartArray.map(item => <BasketItem key={item.name} product={item} />)
        )}
      </div>
    </div>
  );
};
export default BasketList;

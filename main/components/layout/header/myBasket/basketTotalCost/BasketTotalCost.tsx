import { FC } from "react";
import style from "./BasketTotalCost.module.scss";

import { IBasketSlice as IBasket } from "@/app/globalRedux/feature/basket/basket.slice";

interface IBasketTotalCost {
  totalАmountСost: number;
}

const BasketTotalCost: FC<IBasketTotalCost> = ({ totalАmountСost }) => {
  return (
    <div className={style.cost}>
      {new Intl.NumberFormat("uk-UA").format(totalАmountСost)}₴
    </div>
  );
};
export default BasketTotalCost;

import { FC } from "react";
import style from "./OperationButton.module.scss";

import { IBasketItem } from "../basketI.interface";
import { useActions } from "@/hooksuseActions";

interface IOperationButton {
  product: IBasketItem;
}

const OperationButton: FC<IOperationButton> = ({ product }) => {
  const { addOneMoreProduct, removeOneProduct } = useActions();
  const { count } = product;

  return (
    <div className={style.operationButton}>
      <button
        onClick={() => removeOneProduct(product)}
        className={style.countButton}
      >
        -
      </button>
      {count}x
      <button
        onClick={() => addOneMoreProduct(product)}
        className={style.countButton}
      >
        +
      </button>
    </div>
  );
};
export default OperationButton;

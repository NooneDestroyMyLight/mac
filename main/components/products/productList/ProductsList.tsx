import { FC } from "react";
import style from "./ProductsList.module.scss";
import Product from "./productItem/ProductItem";

import { productData } from "./productData.data";
import { IDrinks, Iproduct } from "../../../types/productI.interface";

interface IproductList {
  products: (Iproduct | IDrinks)[];
}

const ProductsList: FC<IproductList> = ({ products }) => {
  return (
    <div className={style.container}>
      {products.map(item => (
        <Product key={item.name} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;

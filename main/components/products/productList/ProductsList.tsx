import { FC } from "react";
import style from "./ProductsList.module.scss";
import Product from "./productItem/ProductItem";

import { productData } from "./productData.data";

const ProductsList: FC = () => {
  return (
    <div className={style.container}>
      {productData.map(item => (
        <Product key={item.imageSrc} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;

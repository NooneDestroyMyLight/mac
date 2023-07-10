import { FC } from "react";
import style from "./Products.module.scss";
import ProductsList from "./productList/ProductsList";

const Products: FC = () => {
  //This Page!
  return (
    <div className={style.containter}>
      <div className={style.title}>MENU</div>
      <ProductsList />
    </div>
  );
};

export default Products;

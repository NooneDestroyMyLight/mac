import { FC } from "react";
import style from "./Products.module.scss";
import ProductsList from "./productList/ProductsList";
import { Iproduct } from "../../types/productI.interface";

interface IcategoryPage {
  category: string;
  product: Iproduct[];
}

const Products: FC<IcategoryPage> = ({ category, product }) => {
  console.log("productCHECK", product);
  //This Page!
  //Change on CATEGORY component

  //useSelect product there!!!
  return (
    <div className={style.categoryWrapper}>
      <div className={style.title}>{category}</div>
      <ProductsList />
    </div>
  );
};

export default Products;

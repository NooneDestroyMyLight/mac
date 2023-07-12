import { FC } from "react";
import style from "./Products.module.scss";
import ProductsList from "./productList/ProductsList";
import { Iproduct } from "../../types/productI.interface";

interface IcategoryPage {
  category: string;
  products: Iproduct[];
}

const Products: FC<IcategoryPage> = ({ category, products }) => {
  //This Page!
  //Change on CATEGORY component

  //useSelect product there!!!
  return (
    <div className={style.categoryWrapper}>
      <div className={style.title}>{category.toUpperCase()}</div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;

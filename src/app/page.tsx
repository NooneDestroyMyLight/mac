"use client";
import style from "./page.module.scss";
import Products from "../../main/components/products/Products";

import { Route, Routes } from "react-router-dom";

import { productData } from "@/componentsproducts/productList/productData.data";
import { menuCategoryData } from "@/componentslayout/header/header-menu/menuItem/menuCategory/menuCategoryData.data";

export default function Home() {
  return (
    <div className={style.content}>
      <Routes>
        {menuCategoryData.map(item => (
          <Route
            path={item.link}
            element={
              <Products
                category={item.name}
                product={productData.filter(
                  product => product.name === item.name
                )}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

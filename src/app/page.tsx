"use client";
import style from "./page.module.scss";
import Products from "../../main/components/products/Products";
import { FC, useEffect } from "react";
import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";
import { usePathname } from "next/navigation";

import { defaultValueCategory } from "./globalRedux/feature/productList/productList.slice";

export default function Home() {
  const { productList, category } = useTypedSelector(
    state => state.productList
  );
  const { filterByCategory } = useActions();

  console.log("render...");
  return (
    <div className={style.content}>
      <Products category={category} products={productList} />
    </div>
  );
}

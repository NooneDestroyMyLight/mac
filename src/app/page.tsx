"use client";
import style from "./page.module.scss";
import Products from "../../main/components/products/Products";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Header from "@/components/layout/header/Header";

export default function Home() {
  const { productList, category } = useTypedSelector(
    state => state.productList
  );

  return (
    <>
      <Header />
      <Products category={category} products={productList} />
    </>
  );
}

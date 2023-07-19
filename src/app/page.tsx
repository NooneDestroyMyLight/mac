"use client";
import style from "./page.module.scss";
import Products from "../../main/components/products/Products";
import { useTypedSelector } from "@/hooksuseTypedSelector";
import Header from "@/componentslayout/header/Header";

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

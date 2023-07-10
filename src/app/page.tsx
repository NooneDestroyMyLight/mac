import Header from "../../main/components/layout/header/Header";
import style from "./page.module.scss";
import Products from "../../main/components/products/Products";

export default function Home() {
  return (
    <div className={style.content}>
      <Header />
      <Products />
    </div>
  );
}

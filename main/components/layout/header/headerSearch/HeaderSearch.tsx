"use client";
import { FC } from "react";
import { useState } from "react";
import style from "./HeaderSearch.module.scss";
import Image from "next/image";
import { productData } from "../../../products/productList/productData.data";

const HeaderSearch: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resultFilter = productData.filter(item =>
    item.name
      .toUpperCase()
      .replace(/\s/g, "")
      .includes(searchTerm.toUpperCase().replace(/\s/g, ""))
  );
  console.log(resultFilter);

  return (
    <div className={style.searchDiv}>
      <input
        type="search"
        className={style.searchForm}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <Image
        className={style.LupeImg}
        src="/images/glassZoomForSearch1.png"
        width={100}
        height={100}
        alt="search"
      />
    </div>
  );
};

export default HeaderSearch;

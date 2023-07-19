"use client";
import { FC, KeyboardEvent } from "react";
import { useState, useRef } from "react";
import style from "./HeaderSearch.module.scss";
import Image from "next/image";
import { useTypedSelector } from "@/hooksuseTypedSelector";
import { useActions } from "@/hooksuseActions";

const HeaderSearch: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const products = useTypedSelector(state => state.productList.productList);
  const { filterBySearch } = useActions();

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filterBySearch(searchTerm);
    }
  };

  return (
    <div className={style.searchDiv}>
      <input
        type="search"
        className={style.searchForm}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
        onKeyPress={e => handleKeyPress(e)}
      />
      <Image
        className={style.LupeImg}
        src="/images/glassZoomForSearch1.png"
        width={100}
        height={100}
        alt="search"
        onClick={() => filterBySearch(searchTerm)}
      />
    </div>
  );
};

export default HeaderSearch;

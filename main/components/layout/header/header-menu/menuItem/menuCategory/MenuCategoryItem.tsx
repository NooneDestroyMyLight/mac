"use client";
import { FC } from "react";

import { IMenuCategory } from "./menuCategoryI.interface";
import style from "./MenuCategory.module.scss";
import { useActions } from "@/hooksuseActions";

interface IMenuCategoryItem {
  props: IMenuCategory;
}

const MenuCategoryItem: FC<IMenuCategoryItem> = ({ props }) => {
  const { filterByCategory } = useActions();
  const { name } = props;

  return (
    <div className={style.menuCategoryItem}>
      <button onClick={e => filterByCategory(name)}>{name}</button>
    </div>
  );
};
export default MenuCategoryItem;

"use client";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IMenuCategoryLink } from "./menuCategoryI.interface";
import style from "./MenuCategory.module.scss";

interface IMenuCategoryItem {
  props: IMenuCategoryLink;
}

const MenuCategoryItem: FC<IMenuCategoryItem> = ({ props }) => {
  const { name, link } = props;
  return (
    <div className={style.menuCategoryItem}>
      <Link to={link}>
        <div>{name}</div>
      </Link>
    </div>
  );
};
export default MenuCategoryItem;

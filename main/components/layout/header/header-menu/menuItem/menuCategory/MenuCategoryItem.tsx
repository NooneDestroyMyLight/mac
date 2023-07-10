import { FC } from "react";
import Link from "next/link";

import { IMenuCategoryLink } from "./menuCategoryI.interface";
import style from "./MenuCategory.module.scss";

interface IMenuCategoryItem {
  props: IMenuCategoryLink;
}

const MenuCategoryItem: FC<IMenuCategoryItem> = ({ props }) => {
  const { name, link } = props;
  return (
    <div className={style.menuCategoryItem}>
      <Link href={link}>
        <div>{name}</div>
      </Link>
    </div>
  );
};
export default MenuCategoryItem;

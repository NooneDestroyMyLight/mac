import { FC } from "react";
import { IMenuLink } from "./menuItemI.interface";
import Link from "next/link";
import style from "./MenuItem.module.scss";
import MenuCategoryItem from "./menuCategory/MenuCategoryItem";
import { menuCategoryData } from "./menuCategory/menuCategoryData.data";
import { useActions } from "@/hooksuseActions";
import { defaultValueCategory } from "@/app/globalRedux/feature/productList/productList.slice";
import { menu } from "../menuItemData.data";

interface IMenuItem {
  props: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ props }) => {
  const { name, link } = props;
  const { filterByCategory } = useActions();
  return (
    <div className={style.menuItem}>
      <Link href={link}>
        <button
          onClick={
            name === menu
              ? e => {
                  filterByCategory(defaultValueCategory);
                }
              : undefined
          }
        >
          {name}
        </button>
      </Link>

      {name === menu ? (
        <div className={style.dropdown}>
          {menuCategoryData.map(item => (
            <MenuCategoryItem key={item.name} props={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default MenuItem;

import { FC } from "react";
import { IMenuLink } from "./menuItemI.interface";
import Link from "next/link";
import style from "./MenuItem.module.scss";
import MenuCategoryItem from "./menuCategory/MenuCategoryItem";
import { menuCategoryData } from "./menuCategory/menuCategoryData.data";
interface IMenuItem {
  props: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ props }) => {
  const { name, link } = props;
  return (
    <div className={style.menuItem}>
      <Link href={link}>
        <div>{name}</div>
      </Link>
      {name === "Menu" ? (
        <ul className={style.dropdown}>
          {menuCategoryData.map(item => (
            <MenuCategoryItem key={item.link} props={item} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default MenuItem;

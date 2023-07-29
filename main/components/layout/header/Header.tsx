import { FC } from "react";
import style from "./Header.module.scss";

import HeaderSearch from "./headerSearch/HeaderSearch";
import Basket from "./myBasket/Basket";
import MenuItem from "./header-menu/menuItem/MenuItem";
import { menuData } from "./header-menu/menuItemData.data";

import Image from "next/image";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={"/"}>
          <Image
            src="/images/mcdonalds-logoREADY.png"
            alt="MacDonaldsLogo"
            width={100}
            height={100}
            className={style.headerLogo}
          />
        </Link>
      </div>
      <nav>
        {menuData.map(item => (
          <MenuItem key={item.name} props={item} />
        ))}
        <HeaderSearch />
        <Basket />
      </nav>
    </header>
  );
};
export default Header;

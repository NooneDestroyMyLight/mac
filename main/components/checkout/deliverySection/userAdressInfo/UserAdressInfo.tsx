"use client";
import { FC, useCallback } from "react";
import style from "./UserAdressInfo.module.scss";
import useOnclickOutside from "react-cool-onclickoutside";

interface IuserAdressInfo {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAdressInfo: FC<IuserAdressInfo> = ({ setActive, setOpen }) => {
  const toggle = useCallback(() => {
    setActive(true);
    setOpen(false);
  }, []);
  return (
    <ul className={style.adreess}>
      <li>
        <button className={style.dropdownItem}>Another Adrsess</button>
      </li>
      <li>
        <button className={style.dropdownItem} onClick={toggle}>
          Click and show model window
        </button>
      </li>
    </ul>
  );
};
export default UserAdressInfo;

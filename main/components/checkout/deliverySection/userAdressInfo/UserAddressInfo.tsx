"use client";
import { FC, useCallback } from "react";
import style from "./UserAddressInfo.module.scss";

import { userAdressData } from "./userAddreess.data";

interface IuserAddressInfo {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAdressInfo: FC<IuserAddressInfo> = ({ setActive, setOpen }) => {
  const toggle = useCallback(() => {
    setActive(true);
    setOpen(false);
  }, []);

  return (
    <div className={style.itemsList}>
      <button
        className={`${style.dropdownItem} ${style.addAddressButton} `}
        onClick={toggle}
      >
        ...Another address
      </button>
      {userAdressData.map(item => (
        <button className={style.dropdownItem}>{item.adreess}</button>
      ))}
    </div>
  );
};
export default UserAdressInfo;

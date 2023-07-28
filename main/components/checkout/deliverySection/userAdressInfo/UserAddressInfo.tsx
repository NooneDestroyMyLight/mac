"use client";
import { FC, useCallback } from "react";
import style from "./UserAddressInfo.module.scss";

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
    <button
      className={`${style.dropdownItem} ${style.addAddressButton} `}
      onClick={toggle}
    >
      ...Another address
    </button>
  );
};
export default UserAdressInfo;

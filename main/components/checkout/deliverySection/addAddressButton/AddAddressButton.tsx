"use client";
import { FC, useCallback } from "react";
import style from "./AddAddressButton.module.scss";

interface IuserAddressInfo {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAddressButton: FC<IuserAddressInfo> = ({ setActive, setOpen }) => {
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
export default AddAddressButton;

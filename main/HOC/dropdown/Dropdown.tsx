"use client";
import { FC, ReactNode, useState } from "react";
import style from "./Dropdown.module.scss";
import useOnclickOutside from "react-cool-onclickoutside";

interface Idropdown {
  children: ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<Idropdown> = ({ children, active, setActive }) => {
  const ref = useOnclickOutside(() => {
    setActive(false);
  });

  return (
    <div
      className={
        active ? `${style.dropdown} ${style.activeDropdown}` : style.dropdown
      }
    >
      {children}
    </div>
  );
};
export default Dropdown;

"use client";
import { FC, ReactNode, useState } from "react";
import style from "./userAdressInfo.module.scss";
import useOnclickOutside from "react-cool-onclickoutside";

const UserAdressInfo: FC = () => {
  return (
    <ul>
      <li>Another Adrsess</li>
      <li>Click and show model window</li>
    </ul>
  );
};
export default UserAdressInfo;

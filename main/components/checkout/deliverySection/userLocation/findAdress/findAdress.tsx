"use client";
import { FC, useState } from "react";
import { ImapCenter } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import style from "./UserLocation.module.scss";

interface IfindAdress {
  center: ImapCenter;
}

const findAdress: FC<IfindAdress> = ({ center }) => {
  return <div></div>;
};
export default findAdress;

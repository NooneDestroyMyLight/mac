"use client";
import { FC } from "react";
import style from "./CloseIcon.module.scss";
import Image from "next/image";

const CloseIcon: FC = () => {
  return (
    <>
      <Image width={20} height={20} src="/images/closeIcon.png" alt="close" />
    </>
  );
};

export default CloseIcon;

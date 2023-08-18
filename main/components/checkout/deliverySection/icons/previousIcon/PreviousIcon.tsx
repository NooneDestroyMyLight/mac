"use client";
import { FC } from "react";
import style from "./PreviousIcon.module.scss";
import Image from "next/image";

const PreviousIcon: FC = () => {
  return (
    <>
      <Image
        width={20}
        height={20}
        src="/images/previousIcon.png"
        alt="previous"
      />
    </>
  );
};

export default PreviousIcon;

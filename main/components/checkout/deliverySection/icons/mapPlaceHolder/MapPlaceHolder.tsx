"use client";
import { FC } from "react";
import style from "./MapPlaceHolder.module.scss";

const MapPlaceholder: FC = () => {
  return (
    <>
      <img
        src="/images/mapPlaceholder.png"
        className={style.mapPlaceholderContainer}
      />
    </>
  );
};

export default MapPlaceholder;

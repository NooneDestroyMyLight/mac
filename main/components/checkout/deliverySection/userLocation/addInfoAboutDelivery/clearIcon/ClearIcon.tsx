import { FC } from "react";
import Image from "next/image";

import style from "./ClearIcon.module.scss";

interface IClearIcon {}

const ClearIcon: FC = () => {
  return (
    <>
      <button className={style.clearIconButton}>
        <Image src="/images/clearIcon.png" height={25} width={25} alt="Clear" />
      </button>
    </>
  );
};
export default ClearIcon;

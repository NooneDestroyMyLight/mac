import { FC } from "react";
import style from "./basketProductImage.module.scss";

interface Iimage {
  imageSrc: string;
  alt: string;
}

const BasketProductImage: FC<Iimage> = ({ imageSrc, alt }) => {
  return (
    <div className={style.image}>
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default BasketProductImage;

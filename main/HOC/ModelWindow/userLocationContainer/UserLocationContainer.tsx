"use client";
import { FC, ReactNode, memo } from "react";
import style from "./UserLocationContainer.module.scss";
import CloseIcon from "@/componentscheckout/deliverySection/icons/closeIcon/CloseIcon";
import PreviousIcon from "@/componentscheckout/deliverySection/icons/previousIcon/PreviousIcon";

interface ImodelWindow {
  children: ReactNode;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentWindowSlide: React.Dispatch<React.SetStateAction<number>>;
  currentWidnowSlide: number;
  actionsWhenClose?: () => void;
}

const UserLocationContainer: FC<ImodelWindow> = memo(
  ({
    children,
    setModelWindowOpen,
    setCurrentWindowSlide,
    currentWidnowSlide,
    actionsWhenClose,
  }) => {
    console.log("UserLocationContainer", "rerender");
    return (
      <div className={style.container}>
        <button
          className={style.closeIcon}
          onClick={() => {
            setModelWindowOpen(false);
            actionsWhenClose != undefined && actionsWhenClose(); //There will be some function when MW close
          }}
        >
          <CloseIcon />
        </button>
        <button
          className={style.previousPageIcon}
          onClick={() => setCurrentWindowSlide(currentWidnowSlide - 1)}
          disabled={currentWidnowSlide === 1 && true}
        >
          <PreviousIcon />
        </button>
        <h2 className={style.h2Title}>Enter your shipping address</h2>
        <div className={style.content}>{children}</div>
      </div>
    );
  }
);
export default UserLocationContainer;

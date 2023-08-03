"use client";
import { FC, ReactNode } from "react";
import style from "./ModelWindow.module.scss";

interface ImodelWindow {
  children: ReactNode;
  isModelWindowOpen: boolean;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModelWindow: FC<ImodelWindow> = ({
  isModelWindowOpen,
  setModelWindowOpen,
  children,
}) => {
  return (
    <div
      onClick={() => setModelWindowOpen(false)}
      className={
        isModelWindowOpen ? `${style.model} ${style.activeModel}` : style.model
      }
    >
      <div
        className={
          isModelWindowOpen
            ? `${style.modelContent} ${style.activeModelContent}`
            : style.modelContent
        }
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default ModelWindow;

"use client";
import { FC, ReactNode } from "react";
import style from "./ModelWindow.module.scss";

interface ImodelWindow {
  children: ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModelWindow: FC<ImodelWindow> = ({ active, setActive, children }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? `${style.model} ${style.activeModel}` : style.model}
    >
      <div
        className={
          active
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

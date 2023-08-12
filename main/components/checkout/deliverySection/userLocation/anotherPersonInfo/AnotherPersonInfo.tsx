import { FC, useState } from "react";
import style from "./AnotherPersonInfo";

import ModelWindow from "../../../../../HOC/modelWindow";

interface IAnotherPersonInfo {}

const AnotherPersonInfo: FC<IAnotherPersonInfo> = ({}) => {
  const [isModelWindowOpen, setModelWindowOpen] = useState<boolean>(false);

  return (
    <>
      <li
        onClick={() => {
          setModelWindowOpen(true);
          console.log(isModelWindowOpen);
        }}
      >
        <span className={style.uperInputText}>Sending to another person?</span>
        <input
          value={"Add recipient details to help the courier"}
          type="text"
          readOnly
          className={style.deliveryButton}
        />
      </li>
      <ModelWindow
        isModelWindowOpen={isModelWindowOpen}
        setModelWindowOpen={setModelWindowOpen}
      >
        <div className={style.container}>
          <ul>
            <h1>Add recipient</h1>
            <li className={style.inputColumn}>
              <span className={style.uperInputText}>Full name</span>
              <input type="text" />
            </li>
            <li className={style.inputColumn}>
              <span className={style.uperInputText}>number</span>
              <input type="text" />
            </li>
            <button>Save</button>
          </ul>
        </div>
      </ModelWindow>
    </>
  );
};
export default AnotherPersonInfo;

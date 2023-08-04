import { FC } from "react";
import style from "./AddInfoAboutDelivery.module.scss";

const AddInfoAboutDelivery: FC = () => {
  return (
    <ul className={style.Container}>
      <ul className={style.inputsContainer}>
        <li>address(streeet)</li>
        <li>№</li>
        <li>№floor,№door</li>
        <li>some add info: (Discriotion...)</li>
      </ul>
      <button>continue</button>
    </ul>
  );
};
export default AddInfoAboutDelivery;

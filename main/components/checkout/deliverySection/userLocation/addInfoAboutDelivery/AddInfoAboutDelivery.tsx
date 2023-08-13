import { FC } from "react";
import Image from "next/image";
import style from "./AddInfoAboutDelivery.module.scss";
import { useForm } from "react-hook-form";

const AddInfoAboutDelivery: FC = () => {
  const {} = useForm();

  return (
    <div className={style.Container}>
      {/* <form> */}
      <ul className={style.inputsContainer}>
        <li>
          <span className={style.uperInputText}>*Streeet name</span>
          <div className={style.inputContainer}>
            <input type="search" />
          </div>
        </li>
        <li>
          <span className={style.uperInputText}>*House № </span>
          <div className={style.inputContainer}>
            <input type="search" />
          </div>
        </li>
        <li>
          <span className={style.uperInputText}>*Floor,door </span>
          <div className={style.inputContainer}>
            <input type="search" />
          </div>
        </li>
        <li>
          <span className={style.uperInputText}>*Some add info(optional)</span>
          <div className={style.inputContainer}>
            <input type="search" />
          </div>
        </li>
        <button className={style.deliverySectionButton}>Submit</button>
      </ul>
      {/* </form> */}
    </div>
  );
};
export default AddInfoAboutDelivery;

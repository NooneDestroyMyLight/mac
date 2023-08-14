import { FC } from "react";
import style from "./FormErrors.module.scss";
import { FieldError } from "react-hook-form";

interface IFormErrors {
  errors: string | undefined;
}

const FormErrors: FC<IFormErrors> = ({ errors }) => {
  return (
    <>
      <label className={style.error}>{errors}</label>
    </>
  );
};
export default FormErrors;

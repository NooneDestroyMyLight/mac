import { FC } from "react";

import style from "./InputAddInfoAboutDelivery.module.scss";

import { IShippingAddress } from "@/app/checkout/checkoutOrder.interface";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormErrors from "../formErrors/FormErrors";

interface IInputAddInfoAboutDelivery {
  register: UseFormRegister<IShippingAddress>;
  fieldName: string;
  errors: FieldErrors<IShippingAddress>;
  label: string;
}

const InputAddInfoAboutDelivery: FC<IInputAddInfoAboutDelivery> = ({
  register,
  errors,
  fieldName,
  label,
}) => {
  return (
    <fieldset className={style.inputContaier}>
      <span className={style.uperInputText}>{`*${label}`}</span>
      <div className={style.inputContainer}>
        <input
          type="search"
          {...register(fieldName as keyof IShippingAddress, {
            required: `${label} is required field*`,
          })}
        />
      </div>
      {errors.streetName && <FormErrors errors={errors.streetName.message} />}
    </fieldset>
  );
};
export default InputAddInfoAboutDelivery;

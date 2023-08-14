import { FC } from "react";

import style from "./AddInfoAboutDelivery.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import FormErrors from "./formErrors/FormErrors";

import { IShippingAddress } from "@/app/checkout/checkoutOrder.interface";

const AddInfoAboutDelivery: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingAddress>({
    defaultValues: {
      streetName: "Ave.Peremogi 75", //Set There Value from previous Slide
    },
  });
  const onSubmit: SubmitHandler<IShippingAddress> = data => {
    console.log(data);
    console.log(`Your street ${data.streetName}`);
    console.log(`Your house № ${data.houseNumber}`);
    console.log(`Your floor and Door ${data.floorAndDoor}`);
    console.log(`Your some info ${data.anotherInfo}`);
    reset();
  };

  return (
    <div className={style.Container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={style.inputsContainer}>
          <li>
            <span className={style.uperInputText}>*Streeet name</span>
            <div className={style.inputContainer}>
              <input
                type="search"
                {...register("streetName", {
                  required: "*Name is required field ",
                })}
              />
            </div>
            {errors.streetName && (
              <FormErrors errors={errors.streetName.message} />
            )}
          </li>
          <li>
            <span className={style.uperInputText}>*House № </span>
            <div className={style.inputContainer}>
              <input
                type="search"
                {...register("houseNumber", {
                  required: "*House № is required field ",
                })}
              />
            </div>
            {errors.houseNumber && (
              <FormErrors errors={errors.houseNumber.message} />
            )}
          </li>
          <li>
            <span className={style.uperInputText}>*Floor,door </span>
            <div className={style.inputContainer}>
              <input
                type="search"
                {...register("floorAndDoor", {
                  required: "*Floor,door is required field ",
                })}
              />
            </div>
            {errors.floorAndDoor && (
              <FormErrors errors={errors.floorAndDoor.message} />
            )}
          </li>
          <li>
            <span className={style.uperInputText}>
              *Some add info(optional)
            </span>
            <div className={style.inputContainer}>
              <input type="search" {...register("anotherInfo")} />
            </div>
          </li>
          <button type="submit" className={style.deliverySectionButton}>
            Submit
          </button>
        </ul>
      </form>
    </div>
  );
};
export default AddInfoAboutDelivery;

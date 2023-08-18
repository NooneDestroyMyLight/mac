import { FC } from "react";

import style from "./AddInfoAboutDelivery.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import FormErrors from "./formErrors/FormErrors";

import {
  IShippingAddress,
  IUserOrder,
} from "@/app/checkout/checkoutOrder.interface";
import { IAddressInfo } from "../UserLocationMW";
import { useActions } from "@/hooksuseActions";
import UserLocationContainer from "../../../../../HOC/modelWindow/userLocationContainer/UserLocationContainer";
import InputAddInfoAboutDelivery from "./input/InputAddInfoAboutDelivery";

interface IAddInfoAboutDelivery {
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentWindowSlide: React.Dispatch<React.SetStateAction<number>>;
  currentWidnowSlide: number;

  locationOnMap: IAddressInfo | null;
  orederObj: IUserOrder;
  setOrederObj: React.Dispatch<React.SetStateAction<IUserOrder>>;
}

const AddInfoAboutDelivery: FC<IAddInfoAboutDelivery> = ({
  setModelWindowOpen,
  setCurrentWindowSlide,
  currentWidnowSlide,

  locationOnMap,
  orederObj,
  setOrederObj,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingAddress>({
    defaultValues: {
      streetName: locationOnMap?.address,
      houseNumber: locationOnMap?.houseNumber,
    },
  });

  const { setNewUserAddress, setCoordinates } = useActions();

  const onSubmit: SubmitHandler<IShippingAddress> = data => {
    if (locationOnMap != null) {
      setNewUserAddress({
        location: locationOnMap.location,
        address:
          data.streetName + ", " + data.houseNumber + ", " + data.floorAndDoor,
      });
      setCoordinates({
        lat: locationOnMap.location.lat,
        lng: locationOnMap.location.lng,
      });
    }

    setOrederObj({
      ...orederObj,
      addressName:
        data.streetName + ", " + data.houseNumber + ", " + data.floorAndDoor,
      instruction: data.floorAndDoor,
    });

    setModelWindowOpen(false);
    reset();
  };

  return (
    <UserLocationContainer
      setCurrentWindowSlide={setCurrentWindowSlide}
      setModelWindowOpen={setModelWindowOpen}
      currentWidnowSlide={currentWidnowSlide}
    >
      <div className={style.Container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputsContainer}>
            <fieldset>
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
            </fieldset>
            <InputAddInfoAboutDelivery
              register={register}
              errors={errors}
              fieldName={"streetName"}
              label={"Street Name"}
            />
            <fieldset>
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
            </fieldset>
            <fieldset>
              <span className={style.uperInputText}>
                *Floor,door, instruction{" "}
              </span>
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
            </fieldset>
            <fieldset>
              <span className={style.uperInputText}>
                *Some add info(optional)
              </span>
              <div className={style.inputContainer}>
                <input type="search" {...register("anotherInfo")} />
              </div>
            </fieldset>
          </div>
          <button type="submit" className={style.deliverySectionButton}>
            Submit
          </button>
        </form>
      </div>
    </UserLocationContainer>
  );
};
export default AddInfoAboutDelivery;

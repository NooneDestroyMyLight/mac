import { FC, useCallback, useRef, useState } from "react";
import style from "./SearchShippingAddress.module.scss";
import { useActions } from "@/hooksuseActions";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "../../map/Map";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { IPropsUserLocationWM } from "../userLocationMW.interface";
import MapPlaceholder from "../../icons/mapPlaceHolder/MapPlaceHolder";
import { IUserOrder } from "@/app/checkout/checkoutOrder.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import FormErrors from "../addInfoAboutDelivery/formErrors/FormErrors";

interface ISearchShippingAddress {
  orederObj: IUserOrder;
  setOrederObj: React.Dispatch<React.SetStateAction<IUserOrder>>;
  stateObj: IPropsUserLocationWM;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFloorAndDoor {
  floorAndDoor: string;
}

const SearchShippingAddress: FC<ISearchShippingAddress> = ({
  setModelWindowOpen,
  stateObj,
  orederObj,
  setOrederObj,
}) => {
  const [location, setLocation] = useState<IUserAddress | null>(null); //Location
  const { setNewUserAddress } = useActions();

  const autocompleteRef = useRef<HTMLInputElement | null>(null);

  // const onHandleSubmit = () => {
  //   setNewUserAddress(location);
  //   if (location != null) {
  //     setModelWindowOpen(false);
  //     setOrederObj({ ...orederObj, addressName: location.address });
  //     setLocation(null);
  //     autocompleteRef.current!.value = "";
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFloorAndDoor>();
  const onSubmit: SubmitHandler<IFloorAndDoor> = data => {
    setNewUserAddress(location);
    if (location != null) {
      setModelWindowOpen(false);
      setOrederObj({
        ...orederObj,
        addressName: location.address + ", " + data.floorAndDoor,
        instruction: data.floorAndDoor,
      });
      setLocation(null);
      autocompleteRef.current!.value = "";
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={style.SearchShippingAddressWrapper}
    >
      <div className={style.content}>
        <ul className={style.autocompleteContainer}>
          <li>
            <div className={style.inputContainer}>
              <span className={style.inputTitle}>*Delivry address</span>
              <Autocomplete
                isLoaded={stateObj.isLoaded}
                center={stateObj.center}
                setLocation={setLocation}
                autocompleteRef={autocompleteRef}
              />
            </div>
          </li>
          <li>
            <div className={style.inputContainer}>
              <span className={style.inputTitle}>
                *Floor, door, some instructions
              </span>
              <input
                type="search"
                {...register("floorAndDoor", {
                  required: "*Instructions is required field ",
                })}
              />
              {errors.floorAndDoor && (
                <FormErrors errors={errors.floorAndDoor.message} />
              )}
            </div>
          </li>
          <button
            onClick={() => stateObj.setCurrentWindowSlide(2)}
            className={style.checkoutPageButton}
          >
            Find place adreess in map
          </button>
        </ul>
        <div className={style.mapContainer}>
          <div className={style.map}>
            {stateObj.isLoaded ? (
              <Map
                muteMap={false}
                center={stateObj.center}
                onLoad={stateObj.onLoad}
                onUnmount={stateObj.onUnmount}
              />
            ) : (
              <MapPlaceholder />
            )}
          </div>
        </div>
      </div>
      <button
        // disabled={location === null && true}
        // onClick={() => {
        //   onHandleSubmit();
        // }}
        type="submit"
        className={style.deliverySectionButton}
      >
        Submit address
      </button>
    </form>
  );
};
export default SearchShippingAddress;

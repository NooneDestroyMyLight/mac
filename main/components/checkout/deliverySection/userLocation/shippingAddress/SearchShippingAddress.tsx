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
import UserLocationContainer from "../../../../../HOC/modelWindow/userLocationContainer/UserLocationContainer";

interface ISearchShippingAddress {
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentWindowSlide: React.Dispatch<React.SetStateAction<number>>;
  currentWidnowSlide: number;

  orederObj: IUserOrder;
  setOrederObj: React.Dispatch<React.SetStateAction<IUserOrder>>;
  stateObj: IPropsUserLocationWM;
}

interface IFloorAndDoor {
  floorAndDoor: string;
}

const SearchShippingAddress: FC<ISearchShippingAddress> = ({
  setModelWindowOpen,
  setCurrentWindowSlide,
  currentWidnowSlide,

  setOrederObj,
  stateObj,
  orederObj,
}) => {
  const [location, setLocation] = useState<IUserAddress | null>(null); //Location
  const { setNewUserAddress } = useActions();

  const autocompleteRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFloorAndDoor>();
  const onSubmit: SubmitHandler<IFloorAndDoor> = data => {
    if (location != null) {
      setNewUserAddress({
        location: location.location,
        address: location.address + ", " + data.floorAndDoor,
      });

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

  const wipeInput = () => {
    autocompleteRef.current!.value = "";
    reset();
  };

  return (
    <UserLocationContainer
      setCurrentWindowSlide={setCurrentWindowSlide}
      setModelWindowOpen={setModelWindowOpen}
      currentWidnowSlide={currentWidnowSlide}
      actionsWhenClose={wipeInput}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.SearchShippingAddressWrapper}
      >
        <div className={style.content}>
          <ul className={style.autocompleteContainer}>
            <fieldset>
              <span className={style.inputTitle}>*Delivry address</span>
              <Autocomplete
                isLoaded={stateObj.isLoaded}
                center={stateObj.center}
                setLocation={setLocation}
                autocompleteRef={autocompleteRef}
              />
            </fieldset>
            <fieldset>
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
            </fieldset>
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
        <button type="submit" className={style.deliverySectionButton}>
          Submit address
        </button>
      </form>
    </UserLocationContainer>
  );
};
export default SearchShippingAddress;

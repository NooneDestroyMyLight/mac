import { FC, MutableRefObject } from "react";
import style from "./SearchShippingAddress.module.scss";
import { useActions } from "@/hooksuseActions";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "../../map/Map";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { IPropsUserLocationWM } from "../userLocationMW.interface";
import MapPlaceholder from "../../icons/mapPlaceHolder/MapPlaceHolder";

interface ISearchShippingAddress {
  setLocation: React.Dispatch<React.SetStateAction<IUserAddress | null>>;
  location: IUserAddress | null;
  setModelWindowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stateObj: IPropsUserLocationWM;
}

const SearchShippingAddress: FC<ISearchShippingAddress> = ({
  setLocation,
  location,
  setModelWindowOpen,
  stateObj,
}) => {
  const { setNewUserAddress } = useActions();

  return (
    <div className={style.SearchShippingAddressWrapper}>
      <div className={style.content}>
        <ul className={style.autocompleteContainer}>
          <li>
            <span className={style.uperInputText}>Delivry address</span>
            <div className={style.inputContainer}>
              <Autocomplete
                isLoaded={stateObj.isLoaded}
                center={stateObj.center}
                setLocation={setLocation}
              />
            </div>
          </li>
          <li>
            <span className={style.uperInputText}>
              Floor, door, instructions
            </span>
            <div className={style.inputContainer}>
              <input type="text" />
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
        onClick={() => {
          setNewUserAddress(location);
          setModelWindowOpen(false); //Add disable when select value feald is none. And Img instade coordinate in map
        }}
        className={style.deliverySectionButton}
      >
        Submit address
      </button>
    </div>
  );
};
export default SearchShippingAddress;

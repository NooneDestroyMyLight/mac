import { FC, MutableRefObject } from "react";
import style from "./SearchShippingAddress.module.scss";
import { useActions } from "@/hooksuseActions";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "../map/Map";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { IPropsUserLocationWM } from "../userLocationMW.interface";

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

  console.log(stateObj.isLoaded);

  return (
    <div className={style.SearchShippingAddressWrapper}>
      <div className={style.content}>
        <ul className={style.autocompleteContainer}>
          <li>
            <div className={style.inputColumn}>
              <span className={style.uperInputText}>Delivry address</span>
              <Autocomplete
                isLoaded={stateObj.isLoaded}
                center={stateObj.center}
                setLocation={setLocation}
              />
            </div>
            <div className={style.inputColumn}>
              <span className={style.uperInputText}>
                Floor, door, instructions
              </span>
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
              <div>EMPTY MAP</div>
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

import { FC } from "react";
import style from "./SearchShippingAddress.module.scss";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "../map/Map";
import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

interface ISearchShippingAddress {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setOpenFindAdreess: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<IUserAddress | null>>;
}

const SearchShippingAddress: FC<ISearchShippingAddress> = ({
  isLoaded,
  center,
  setOpenFindAdreess,
  setLocation,
}) => {
  return (
    <>
      <ul className={style.autocompleteContainer}>
        <li>
          <div className={style.inputField}>
            <span className={style.uperInputText}>Delivery addresses</span>
            <Autocomplete
              isLoaded={isLoaded}
              center={center}
              setLocation={setLocation}
            />
          </div>
          <div className={style.inputField}>
            <span className={style.uperInputText}>
              Floor, door, instructions...
            </span>
            <input type="text" />
          </div>
        </li>
        <button
          onClick={() => setOpenFindAdreess(true)}
          className={style.checkoutPageButton}
        >
          Find place adreess in map
        </button>
      </ul>
      <div className={style.mapContainer}>
        <div className={style.map}>
          {isLoaded ? <Map center={center} /> : <div>EMPTY MAP</div>}
        </div>
      </div>
    </>
  );
};
export default SearchShippingAddress;

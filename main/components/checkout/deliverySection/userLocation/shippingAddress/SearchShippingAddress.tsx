import { FC } from "react";
import style from "./SearchShippingAddress.module.scss";

import Autocomplete from "./autocomplete/Autocomplete";
import Map from "../map/Map";
import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";
import { useActions } from "@/hooksuseActions";

interface ISearchShippingAddress {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setCurrentWindowSlide: React.Dispatch<React.SetStateAction<number>>;
  setLocation: React.Dispatch<React.SetStateAction<IUserAddress | null>>;
  location: IUserAddress | null;
}

const SearchShippingAddress: FC<ISearchShippingAddress> = ({
  isLoaded,
  center,
  setCurrentWindowSlide,
  setLocation,
  location,
}) => {
  const { setNewUserAddress } = useActions();
  return (
    <div className={style.SearchShippingAddressWrapper}>
      <div className={style.content}>
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
            onClick={() => setCurrentWindowSlide(2)}
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
      </div>
      <button
        onClick={() => {
          setNewUserAddress(location);
        }}
        className={style.deliverySectionButton}
      >
        Submit address
      </button>
    </div>
  );
};
export default SearchShippingAddress;

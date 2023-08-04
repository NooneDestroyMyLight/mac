"use client";
import { ChangeEvent, FC, useEffect } from "react";
import { useActions } from "@/hooksuseActions";
import style from "./Autocomplete.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

interface IAutocomplete {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setLocation: React.Dispatch<React.SetStateAction<IUserAddress | null>>;
}

const Autocomplete: FC<IAutocomplete> = ({ isLoaded, center, setLocation }) => {
  const coordinates: google.maps.CircleLiteral = {
    center: { lat: 49.9935, lng: 36.230383 },
    radius: 500,
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "ua" },
      locationBias: coordinates,
      language: "uk",
    },

    initOnMount: false,
    debounce: 300,
  });
  const { setCoordinates } = useActions();

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description, structured_formatting }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"

      clearSuggestions();
      // Get latitude and longitude via utility functions

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);

        setValue(description, false);
        setCoordinates({
          lat: lat,
          lng: lng,
        });
        setLocation({
          location: { lat: lat, lng: lng },
          address: structured_formatting.main_text,
        });
      });
    };

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded]);

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div
          className={style.item}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </div>
      );
    });

  return (
    <div className={style.autocompleteContainer} ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search..."
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <ul className={style.hints}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
export default Autocomplete;

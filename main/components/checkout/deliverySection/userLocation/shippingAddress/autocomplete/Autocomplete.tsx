"use client";
import { ChangeEvent, FC, MutableRefObject, useEffect } from "react";
import { useActions } from "@/hooksuseActions";
import style from "./Autocomplete.module.scss";

import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { IUserAddress } from "@/app/globalRedux/feature/checkout/googleMap.slice";

import { UseFormRegister } from "react-hook-form";

interface IAutocomplete {
  isLoaded: boolean;
  center: google.maps.LatLngLiteral;
  setLocation: React.Dispatch<React.SetStateAction<IUserAddress | null>>;
  autocompleteRef: MutableRefObject<HTMLInputElement | null>;
  // ref:
}

const Autocomplete: FC<IAutocomplete> = ({
  isLoaded,
  center,
  setLocation,
  autocompleteRef,
}) => {
  const coordinates: google.maps.CircleLiteral = {
    center: { lat: 49.9935, lng: 36.230383 }, //Kharkiv District restrict
    radius: 500,
  };

  const {
    ready,
    suggestions: { status, data },
    setValue,
    value,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "ua" },
      locationBias: coordinates,
      language: "uk",
    },

    initOnMount: false,
    debounce: 400,
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
      clearSuggestions();

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);
        setValue(description, false);

        autocompleteRef.current!.value = structured_formatting.main_text;

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
        type="search"
        onChange={handleInput}
        disabled={!ready}
        ref={autocompleteRef}
      />

      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <ul className={style.hints}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
export default Autocomplete;

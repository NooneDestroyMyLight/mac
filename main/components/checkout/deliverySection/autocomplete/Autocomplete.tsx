"use client";
import { ChangeEvent, FC, useEffect } from "react";
import style from "./Autocomplete.module.scss";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

import { useActions } from "@/hooksuseActions";

interface IAutocomplete {
  isLoaded: boolean;
}

const Autocomplete: FC<IAutocomplete> = ({ isLoaded }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });

  const { setCoordinates } = useActions();

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      console.log(description);
      // Get latitude and longitude via utility functions

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);
        setCoordinates({ lat, lng });
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
        <li
          className={style.hints}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className={style.autocompleteContainer} ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
export default Autocomplete;

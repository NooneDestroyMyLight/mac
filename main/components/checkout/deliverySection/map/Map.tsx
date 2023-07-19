"use client";
import { FC, useState, useCallback, useRef } from "react";

import { GoogleMap } from "@react-google-maps/api";
import { mapDefaultTheme } from "./mapTheme";

import style from "./Map.module.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface Imap {
  center: {
    lat: number;
    lng: number;
  };
}
const defaultOptions: google.maps.MapOptions = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  disableDoubleClickZoom: false,
  styles: mapDefaultTheme,
};

const Map: FC<Imap> = ({ center }) => {
  const [map, setMap] = useState(null);

  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = null;
  }, []);

  return (
    <div className={style.MapWrapper}>
      <GoogleMap
        options={defaultOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  );
};

export default Map;

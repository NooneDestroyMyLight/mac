"use client";
import {
  FC,
  useState,
  useCallback,
  useRef,
  useMemo,
  MutableRefObject,
} from "react";
import style from "./Map.module.scss";
import Image from "next/image";

import { GoogleMap } from "@react-google-maps/api";
import { mapDefaultTheme } from "./mapTheme";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
};

interface Imap {
  center: {
    lat: number;
    lng: number;
  };
  muteMap: boolean;
  handleCenterChanged?: any;
  onLoad: (map: google.maps.Map) => void;
  onUnmount: (map: google.maps.Map) => void;
}

const Map: FC<Imap> = ({
  center,
  muteMap,
  handleCenterChanged,
  onLoad,
  onUnmount,
}) => {
  const defaultOptions: google.maps.MapOptions = {
    zoomControl: muteMap,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    disableDoubleClickZoom: false,
    styles: mapDefaultTheme,
    draggable: muteMap,
  };

  return (
    <div className={style.MapWrapper}>
      <div className={style.marker}>
        <Image
          width={40}
          height={40}
          src="/images/icon/free-icon-pin-3944427.png"
          alt="mapMarker"
        />
      </div>
      <GoogleMap
        options={defaultOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onCenterChanged={handleCenterChanged}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {/* <Marker position={markerPosition} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;

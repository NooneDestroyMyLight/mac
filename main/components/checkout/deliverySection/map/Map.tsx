"use client";
import { FC, useState, useCallback, useRef, useMemo } from "react";
import style from "./Map.module.scss";
import Image from "next/image";

import Geocode from "react-geocode";

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
}

const API_KEY = process.env.API_KEY;

const Map: FC<Imap> = ({ center, muteMap }) => {
  const defaultOptions: google.maps.MapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    disableDoubleClickZoom: false,
    styles: mapDefaultTheme,
    draggable: muteMap,
  };

  Geocode.setApiKey(API_KEY);

  useMemo(() => {
    // Geocode.setLanguage("en");
    Geocode.fromLatLng(center.lat.toString(), center.lng.toString()).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      error => {
        console.error("Ошибка", error);
      }
    );
  }, []);

  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(center);
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = null;
  }, []);

  const handleCenterChanged = () => {
    if (mapRef.current) {
      //@ts-ignore
      const newCenter = mapRef.current.getCenter().toJSON();
      setMarkerPosition(newCenter);
    }
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

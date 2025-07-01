import { GoogleMap, LoadScript, Marker, Rectangle } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 22.2887,
  lng: 70.7757,
};

type Props = {
  lat: number;
  lng: number;
  onMapClick: (lat: number, lng: number) => void;
};


const gridSize = 0.000027; // ~3 meters in degrees

const Map = ({ lat, lng, onMapClick }: Props) => {
  const bounds = {
    north: lat + gridSize,
    south: lat,
    east: lng + gridSize,
    west: lng,
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={20}
        onClick={(e) => {
          if (e.latLng) {
            onMapClick(e.latLng.lat(), e.latLng.lng());
          }
        }}
      >
        <Marker position={{ lat, lng }} />
        <Rectangle bounds={bounds} options={{ strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 1, fillOpacity: 0 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

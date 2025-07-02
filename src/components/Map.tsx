import { GoogleMap, LoadScript, Marker, Rectangle } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import GridLayer from "./GridLayer";
import { encodeLatLngToWords } from "@/lib/wordEncoding";

type MapProps = {
  onWordsChange: (words: string) => void;
  externalCoords: { lat: number; lng: number };
};

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const initialPosition = {
  lat: 22.2887,
  lng: 70.7757,
};

const gridSize = 0.000027; // ~3m in degrees

const Map = ({ onWordsChange, externalCoords }: MapProps) => {
  const [position, setPosition] = useState(externalCoords);

    useEffect(() => {
    setPosition(externalCoords);
  }, [externalCoords]);
  
  const bounds = {
    north: position.lat + gridSize,
    south: position.lat,
    east: position.lng + gridSize,
    west: position.lng,
  };

  useEffect(() => {
    const [w1, w2, w3] = encodeLatLngToWords(position.lat, position.lng);
    onWordsChange(`${w1}.${w2}.${w3}`);
  }, [position, onWordsChange]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={20}
        mapTypeId="roadmap"
        onClick={(e) => {
          if (e.latLng) {
            setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }
        }}
      >
        <Marker position={position} />
        <Rectangle
          bounds={bounds}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0,
          }}
        />
        <GridLayer />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

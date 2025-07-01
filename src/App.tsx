// File: src/App.tsx
import { useState } from "react";
import Map from "./components/Map";
import { LeftPanel } from "./components/LeftPanel";

function App() {
  const [lat, setLat] = useState(22.2887);
  const [lng, setLng] = useState(70.7757);

  return (
    <div className="relative">
      <Map lat={lat} lng={lng} onMapClick={(newLat:any, newLng:any) => {
        setLat(newLat);
        setLng(newLng);
      }} />
      <LeftPanel onSearch={(newLat, newLng) => {
        setLat(newLat);
        setLng(newLng);
      }} />
    </div>
  );
}

export default App;

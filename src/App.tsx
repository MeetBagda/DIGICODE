import { useState } from "react";
import Map from "@/components/Map";
import { LeftPanel } from "@/components/LeftPanel";
import { Toaster } from "sonner";

export default function App() {
  const [threeWords, setThreeWords] = useState("");
  const [coords, setCoords] = useState({ lat: 22.2887, lng: 70.7757 });

  return (
    <div className="relative w-full h-screen">
      <Map
        onWordsChange={setThreeWords}
        externalCoords={coords}
        onCoordsChange={(lat, lng) => setCoords({ lat, lng })}
      />

      <LeftPanel
        onSearch={(lat, lng) => setCoords({ lat, lng })}
        currentCoords={coords}
        threeWords={threeWords}
        onWordsSearch={setThreeWords}
      />

      <Toaster position="bottom-right" richColors />
    </div>
  );
}

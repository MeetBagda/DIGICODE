// File: src/components/LeftPanel.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
  onSearch: (lat: number, lng: number) => void;
  currentCoords: { lat: number; lng: number };
};

export const LeftPanel = ({ onSearch, currentCoords }: Props) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // Update input fields when currentCoords change (from map interactions)
  useEffect(() => {
    setLat(currentCoords.lat.toFixed(6));
    setLng(currentCoords.lng.toFixed(6));
  }, [currentCoords]);

  const copyCoordinates = async () => {
    const coordsText = `${lat}, ${lng}`;
    try {
      await navigator.clipboard.writeText(coordsText);
      toast.success("Coordinates copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy coordinates");
    }
  };

  return (
    <Card className="absolute bottom-5 left-5 z-10 w-80 shadow-xl">
      <CardContent className="p-4 space-y-3">
        <p className="font-semibold text-lg">Enter Coordinates</p>
        <Input placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
        <Input placeholder="Longitude" value={lng} onChange={(e) => setLng(e.target.value)} />
        <div className="flex gap-2">
          <Button
            onClick={() => {
              const latNum = parseFloat(lat);
              const lngNum = parseFloat(lng);
              if (!isNaN(latNum) && !isNaN(lngNum)) {
                onSearch(latNum, lngNum);
              }
            }}
            className="flex-1"
          >
            Locate
          </Button>
          <Button
            onClick={copyCoordinates}
            variant="outline"
            className="flex-1"
          >
            Copy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

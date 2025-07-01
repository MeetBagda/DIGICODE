// File: src/components/LeftPanel.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  onSearch: (lat: number, lng: number) => void;
};

export const LeftPanel = ({ onSearch }: Props) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  return (
    <Card className="absolute top-5 left-5 z-10 w-80 shadow-xl">
      <CardContent className="p-4 space-y-3">
        <p className="font-semibold text-lg">Enter Coordinates</p>
        <Input placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
        <Input placeholder="Longitude" value={lng} onChange={(e) => setLng(e.target.value)} />
        <Button
          onClick={() => {
            const latNum = parseFloat(lat);
            const lngNum = parseFloat(lng);
            if (!isNaN(latNum) && !isNaN(lngNum)) {
              onSearch(latNum, lngNum);
            }
          }}
        >
          Locate
        </Button>
      </CardContent>
    </Card>
  );
};

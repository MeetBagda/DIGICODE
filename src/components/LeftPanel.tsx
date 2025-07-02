// File: src/components/LeftPanel.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { decodeWordsToLatLng } from "@/lib/wordEncoding";

type Props = {
  onSearch: (lat: number, lng: number) => void;
  currentCoords: { lat: number; lng: number };
  threeWords: string;
  onWordsSearch: (words: string) => void;
};

export const LeftPanel = ({ onSearch, currentCoords, threeWords, onWordsSearch }: Props) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");

  // Update input fields when currentCoords change (from map interactions)
  useEffect(() => {
    setLat(currentCoords.lat.toFixed(6));
    setLng(currentCoords.lng.toFixed(6));
  }, [currentCoords]);

  // Update three words when threeWords prop changes
  useEffect(() => {
    const words = threeWords.split('.');
    if (words.length === 3) {
      setWord1(words[0]);
      setWord2(words[1]);
      setWord3(words[2]);
    }
  }, [threeWords]);

  const copyCoordinates = async () => {
    const coordsText = `${lat}, ${lng}`;
    try {
      await navigator.clipboard.writeText(coordsText);
      toast.success("Coordinates copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy coordinates");
    }
  };

  const copyThreeWords = async () => {
    const wordsText = `${word1}.${word2}.${word3}`;
    try {
      await navigator.clipboard.writeText(wordsText);
      toast.success("Three words copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy three words");
    }
  };

  const searchByWords = () => {
    const coords = decodeWordsToLatLng(word1, word2, word3);
    if (coords) {
      onSearch(coords.lat, coords.lng);
      onWordsSearch(`${word1}.${word2}.${word3}`);
    } else {
      toast.error("Invalid words entered");
    }
  };

  return (
    <Card className="absolute bottom-5 left-5 z-10 w-80 shadow-xl">
      <CardContent className="p-4 space-y-4">
        {/* Coordinates Section */}
        <div className="space-y-3">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Three Words Section */}
        <div className="space-y-3">
          <p className="font-semibold text-lg">Enter Three Words</p>
          <div className="flex gap-2">
            <Input placeholder="Word 1" value={word1} onChange={(e) => setWord1(e.target.value)} />
            <Input placeholder="Word 2" value={word2} onChange={(e) => setWord2(e.target.value)} />
            <Input placeholder="Word 3" value={word3} onChange={(e) => setWord3(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={searchByWords}
              className="flex-1"
            >
              Locate
            </Button>
            <Button
              onClick={copyThreeWords}
              variant="outline"
              className="flex-1"
            >
              Copy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

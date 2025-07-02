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
  const [coordsInput, setCoordsInput] = useState("");
  const [wordsInput, setWordsInput] = useState("");

  useEffect(() => {
    const formattedCoords = `${currentCoords.lat.toFixed(6)}, ${currentCoords.lng.toFixed(6)}`;
    setCoordsInput(formattedCoords);
  }, [currentCoords]);

  useEffect(() => {
    setWordsInput(threeWords);
  }, [threeWords]);

  const copyCoordinates = async () => {
    try {
      await navigator.clipboard.writeText(coordsInput);
      toast.success("Coordinates copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy coordinates");
    }
  };

  const copyThreeWords = async () => {
    try {
      await navigator.clipboard.writeText(wordsInput);
      toast.success("Three words copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy three words");
    }
  };

  const searchByCoordinates = () => {
    // Parse format: "22.288783, 70.775314"
    const coords = coordsInput.split(',').map(coord => coord.trim());
    if (coords.length === 2) {
      const latNum = parseFloat(coords[0]);
      const lngNum = parseFloat(coords[1]);
      if (!isNaN(latNum) && !isNaN(lngNum)) {
        onSearch(latNum, lngNum);
        return;
      }
    }
    toast.error("Invalid coordinate format. Use: lat, lng (e.g., 22.288783, 70.775314)");
  };

  const searchByWords = () => {
    // Parse format: "word1.word2.word3"
    const words = wordsInput.split('.');
    
    if (words.length === 3 && words.every(word => word.trim().length > 0)) {
      const [w1, w2, w3] = words.map(word => word.trim());
      
      const coords = decodeWordsToLatLng(w1, w2, w3);
      
      if (coords) {
        onSearch(coords.lat, coords.lng);
        onWordsSearch(`${w1}.${w2}.${w3}`);
        return;
      }
      toast.error("Invalid words entered");
    } else {
      toast.error("Invalid word format. Use: word1.word2.word3 (e.g., cat.wire.hobby)");
    }
  };

  return (
    <Card className="absolute bottom-5 left-5 z-10 w-80 shadow-xl">
      <CardContent className="p-4 space-y-4">
        {/* Coordinates Section */}
        <div className="space-y-3">
          <p className="font-semibold text-lg">Enter Coordinates</p>
          <Input 
            placeholder="lat, lng (e.g., 22.288783, 70.775314)" 
            value={coordsInput} 
            onChange={(e) => setCoordsInput(e.target.value)} 
          />
          <div className="flex gap-2">
            <Button
              onClick={searchByCoordinates}
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
          <Input 
            placeholder="word1.word2.word3 (e.g., cat.wire.hobby)" 
            value={wordsInput} 
            onChange={(e) => setWordsInput(e.target.value)} 
          />
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

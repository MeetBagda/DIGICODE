import { Rectangle, useGoogleMap } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const LAT_STEP = 0.000027;

type Grid = {
  north: number;
  south: number;
  east: number;
  west: number;
};

const GridLayer = () => {
  const map = useGoogleMap();
  const [grids, setGrids] = useState<Grid[]>([]);

  useEffect(() => {
    if (!map) return;

    const bounds = map.getBounds();
    if (!bounds) return;

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const latStart = sw.lat();
    const latEnd = ne.lat();
    const lngStart = sw.lng();
    const lngEnd = ne.lng();

    const midLat = (latStart + latEnd) / 2;
    const lngStep = LAT_STEP / Math.cos((midLat * Math.PI) / 180);

    const newGrids: Grid[] = [];

    for (let lat = latStart; lat < latEnd; lat += LAT_STEP) {
      for (let lng = lngStart; lng < lngEnd; lng += lngStep) {
        newGrids.push({
          north: lat + LAT_STEP,
          south: lat,
          east: lng + lngStep,
          west: lng,
        });
      }
    }

    setGrids(newGrids);
  }, [map]);

  return (
    <>
      {grids.map((g, idx) => (
        <Rectangle
          key={idx}
          bounds={{
            north: g.north,
            south: g.south,
            east: g.east,
            west: g.west,
          }}
          options={{
            strokeColor: "#000",
            strokeOpacity: 0.1,
            strokeWeight: 0.5,
            fillOpacity: 0,
            clickable: false, 
            draggable: false,
            editable: false,
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
};

export default GridLayer;

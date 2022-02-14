import { Marker, useMapEvent } from "react-leaflet";
import { useGameContext } from "../../context/GameProvider";

const LocationMarker = () => {
  const {
    state: { currentPosition, basePosition },
    setCurrentPosition,
    setDistanceBetweenPositions,
  } = useGameContext();

  useMapEvent("click", (e) => {
    setCurrentPosition(e.latlng);

    const distanceInKm = (
      e.latlng.distanceTo([basePosition.lat, basePosition.long]) / 1000
    ).toFixed();

    setDistanceBetweenPositions(distanceInKm);
  });

  return currentPosition && <Marker position={currentPosition}></Marker>;
};

export default LocationMarker;

import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Polyline,
  Tooltip,
} from "react-leaflet";
import { useGameContext } from "../../context/GameProvider";
import { LocationMarker } from "../LocationMarker";
import mapData from "../../assets/europegeojson.json";

const Map = () => {
  const {
    state: {
      currentPosition,
      basePosition,
      showMarker,
      distanceBetweenPositions,
    },
  } = useGameContext();

  const style = {
    fillColor: "#2ecc71",
    fillOpacity: 0.3,
    color: "#27ae60",
    weight: 2,
  };

  return (
    <div>
      <MapContainer
        center={[53.0, 9.0]}
        zoom={4}
        minZoom={2}
        maxZoom={10}
        style={{ width: "100%", height: window.innerHeight - 230 }}
      >
        <GeoJSON data={mapData} style={style} />
        <LocationMarker />
        {showMarker && (
          <>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[basePosition.lat, basePosition.long]}></Marker>
            <Polyline
              pathOptions={{ color: "#27ae60" }}
              positions={[
                [basePosition.lat, basePosition.long],
                [currentPosition.lat, currentPosition.lng],
              ]}
            >
              <Tooltip direction="bottom" opacity={1} permanent>
                {`${distanceBetweenPositions} km`}
              </Tooltip>
            </Polyline>
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;

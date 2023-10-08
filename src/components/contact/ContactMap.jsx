import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./contactMap.module.scss";

function ContactMap() {
  const position = [47.0441313, -122.9002909];
  return (
    <MapContainer
      center={position}
      zoom={19}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <p className={styles.text}>We are here!</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactMap;

// src/components/ContactMap.jsx
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 40.7128, // New York latitude
  lng: -74.006, // New York longitude
};

export default function ContactMap() {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-map-wrap">
          <LoadScript googleMapsApiKey="AIzaSyDoqCPL5EH5IusZ_GLy3cF7Jj48p8YJRnY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
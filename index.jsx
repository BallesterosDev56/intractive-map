import { TileLayer, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapView = () => {
    const position = [4.5339, -75.6811];
    const zoom = 14; 
    const style = { height: "100vh", width: "100%" };

    return (
        <MapContainer center={position} zoom={zoom} style={style}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import {useCoordinates} from '../hooks/useCoordinates.js';

function Map() {
    const [error, coordinates] = useCoordinates();

    if (!error && !coordinates) {
        return <p>Loading</p>;
    }

    return (
        <MapContainer
            center={[coordinates.latitude, coordinates.longitude]}
            zoom={8}
            scrollWheelZoom={false}
            id='map'
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[coordinates.latitude, coordinates.longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;

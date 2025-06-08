import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { GpxData } from '../types';

interface MapProps {
    gpxData: GpxData | null;
}

const Map: React.FC<MapProps> = ({ gpxData }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {gpxData && gpxData.markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}>
                    <Popup>
                        {marker.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
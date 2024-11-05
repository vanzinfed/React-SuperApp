import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSection.css'; // Import the CSS file

const MapSection = () => {
    // Fix default icon for Leaflet
    const icon = L.icon({
        iconUrl: require('./icon.png'), // Replace with your marker icon path
        iconSize: [50, 50],
        iconAnchor: [12, 41],
    });

    return (
        <div className="container">
            <div className="message-block">
                <h3>Появились вопросы?</h3>
                <a href="https://t.me/jztop" className="button">
                    <img src={require('./logo.png')} alt="Logo" className="logo" />
                    Связаться с нами
                </a>
            </div>
            <MapContainer center={[55.80839783292075, 37.544632226272356]} zoom={17} className="map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[55.80839783292075, 37.544632226272356]} icon={icon}>
                    <Popup>Это ваша точка!</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

// Make sure to adjust the center and zoom level as needed
export default MapSection;

import { useState, useEffect } from 'react';
import "./styles.css";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';

export default function Map(props) {
  const endpoint = '/vehicles';
  const url = props.dataSource + endpoint;

  const [vehicleData, setVehicleData] = useState([]);

  function fetchData() {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setVehicleData(res);
    }, err => {
      console.warn('Vehicle data loading error:', err);
      // show error toast etc
    })
  }

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      console.log(timer);
      fetchData()
    }, 5000);
    return (() => {
      console.log('EXITING, ', timer);
      clearInterval(timer);
    });
  }, []);

  return (
    <MapContainer className='Map' center={[37.428, -122.085]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

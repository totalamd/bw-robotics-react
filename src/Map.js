import { useState, useEffect } from 'react';
import "./styles.css";
import droneIcon from "./img/quadcopter-black-48.png";
import tractorIcon from "./img/tractor-variant-black-48.png";
import markerRed from "./img/marker-red.png";
import markerGreen from "./img/marker-green.png";
import markerYellow from "./img/marker-yellow.png";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup, Tooltip } from 'react-leaflet';

export default function Map(props) {
  const updateInterval = 4 * 1000; // may be specified by config/customer settings
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
    fetchData();
    let timer = null;
    timer = setInterval(() => {
      fetchData()
    }, updateInterval);
    return (() => {
      clearInterval(timer);
    });
  }, []);

  function VehicleMarkers() {
    const getVechicleIcon = type => {
      switch (type) {
        case 'tractor':
          return tractorIcon;
        case 'drone':
          return droneIcon;
        default:
          break;
      }
    };
    const getStatusIcon = status => {
      switch (status) {
        case 'on-mission':
          return markerGreen;
        case 'idle':
          return markerYellow;
        case 'unreachable':
          return markerRed;
        default:
          break;
      }
    };
    const getInfo = item => <>
      ID: {item._id}<br />
      Type: {item.type}<br />
      Status: {item.status}<br />
      Location:<br />
      &emsp;{item.location.latitude}<br />
      &emsp;{item.location.longitude}<br />
    </>;

    return vehicleData.map(item => {
      const vechicleIcon = getVechicleIcon(item.type);
      const statusIcon = getStatusIcon(item.status);

      return (
        <Marker
          key={item._id}
          position={[item.location.latitude, item.location.longitude]}
          icon={L.icon(
            {
              iconUrl: vechicleIcon,
              shadowUrl: statusIcon,
              iconSize: [36, 36],
              shadowAnchor: [20, 20],
              popupAnchor: [0, -20],
              tooltipAnchor: [20, 0]
            })}
        >
          <Popup>
            {getInfo(item)}
          </Popup>
          <Tooltip>
            {getInfo(item)}
          </Tooltip>
        </Marker>)
    });
  }

  return (
    <MapContainer className='Map' center={[37.428, -122.090]} zoom={16} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <VehicleMarkers />
    </MapContainer>
  );
}

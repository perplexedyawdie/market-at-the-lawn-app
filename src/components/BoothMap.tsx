import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext } from 'react';
import MapContext from '../context/MapContext';
import { flagOutline } from 'ionicons/icons';
import L from 'leaflet';
const BoothMap: React.FC = () => {
    const mapContext = useContext(MapContext);
    const boothIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    return (
        <MapContainer style={{ height: '50vh' }} center={[18.015165228232256, -76.79023566499683]} zoom={18} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                mapContext?.map((booth) => {
                   return <Marker icon={boothIcon} key={booth.id} position={[booth.coords[0], booth.coords[1]]}>
                        <Popup >
                            {booth.name}
                        </Popup>
                    </Marker>
                })
            }

        </MapContainer>
    );
};

export default BoothMap;

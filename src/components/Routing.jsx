import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing({source,destination}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(source.lat, source.lng), L.latLng(destination.lat, destination.lng)],
      language: 'fr',
      lineOptions: {styles: [{color: '#242c81', weight: 2}]},
        fitSelectedRoutes: true,
        draggableWaypoints: false,
        routeWhileDragging: false,
        createMarker: function() { return null; },
        lineOptions : {
            addWaypoints: false
        }
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [destination.lat, destination.lng, destination.lng.lng, map, source.lat, source.lng]);

  return null;
}

<template>
    <div>
        <div id="user" style="height: 800px"></div>
    </div>
</template>

<script>
// Importaciones
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//https://www.npmjs.com/package/leaflet-geosearch
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

//https://www.npmjs.com/package/leaflet.locatecontrol
import LocateControl from "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";

export default {
    data() {
        return {
            map: null,
            marker: null,
        };
    },
    mounted() {
        // Inicialización del mapa
        this.initializeMap();

        // Eventos del mapa
        this.map.on("locationfound", this.handleLocationFound);
        this.map.on("click", this.moveMarker);
        this.map.on("geosearch/showlocation", this.moveMarker);

        // Ubicar al usuario al abrir el mapa
        this.map.locate({ setView: true });
    },
    methods: {
        initializeMap() {
            this.map = L.map("user");

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
                attribution:
                    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            // Agregar control de geocodificación
            const provider = new OpenStreetMapProvider();
            const searchControl = new GeoSearchControl({
                provider: provider,
                showMarker: false,
                searchLabel: "Buscar dirección...",
                notFoundMessage: "Sorry, that address could not be found.",
                style: "bar",
            });
            this.map.addControl(searchControl);

            // Agregar control de ubicación
            const locateControl = new LocateControl({
                position: "topleft",
                flyTo: true,
                showPopup: false,
                marker: false,
                drawMarker: false,
            }).addTo(this.map);
        },

        handleLocationFound(e) {
            if (this.marker) {
                // Si el marcador ya existe, solo mueve su ubicación
                this.marker.setLatLng(e.latlng);
            } else {
                // Si el marcador no existe, crea uno nuevo
                this.marker = L.circleMarker(e.latlng, {
                    color: "#fff",
                    fillColor: "#007bff",
                    fillOpacity: 1,
                    radius: 10, // Este es el radio en píxeles
                    weight: 3,
                    className: "pulse",
                }).addTo(this.map);
            }
        },

        moveMarker(e) {
            const coords = e.location
                ? [e.location.y, e.location.x]
                : [e.latlng.lat, e.latlng.lng];

            this.marker.setLatLng(coords);
        },

        adjustMarkerRadius() {
            if (this.marker) {
                this.marker.setRadius(this.getRadius());
            }
        },
    },
};
</script>

<style>
@keyframes pulse {
    0% {
        stroke-width: 1;
    }
    50% {
        stroke-width: 3;
    }
    100% {
        stroke-width: 1;
    }
}

.pulse {
    animation: pulse 2s ease infinite;
}
</style>

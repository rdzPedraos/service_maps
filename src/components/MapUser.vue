<template>
    <div>
        <span style="color: white">{{ coords }}</span>
        <div id="user" style="height: 800px"></div>
    </div>
</template>

<script>
import { env } from "./config";

// Importaciones
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//Tiles https://openmaptiles.org/docs/  - https://cloud.maptiler.com/account/keys/
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

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
            coords: [0, 0],
        };
    },
    mounted() {
        // Inicialización del mapa
        this.initializeMap();

        // Eventos del mapa
        this.map.on("locationfound", this.moveMarker);
        this.map.on("click", this.moveMarker);
        this.map.on("geosearch/showlocation", this.moveMarker);

        // Ubicar al usuario al abrir el mapa
        this.map.locate({ setView: true });
    },
    methods: {
        initializeMap() {
            const map = L.map("user");
            const marker = this.createMarker();

            this.addControls(map, [
                marker,
                this.createTileLayer(),
                this.createSearchControl(),
                this.createLocateControl(),
            ]);

            this.map = map;
            this.marker = marker;
        },

        addControls(map, controls) {
            controls.forEach((control) => {
                map.addControl(control);
            });
        },

        createTileLayer() {
            return new MaptilerLayer({
                apiKey: env.MAPS_KEY,
                maxZoom: 18,
                attribution:
                    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            });
        },

        createMarker() {
            return L.circleMarker(this.coords, {
                color: "#fff",
                fillColor: "#007bff",
                fillOpacity: 1,
                radius: 10, // Este es el radio en píxeles
                weight: 3,
                className: "pulse",
            });
        },

        createSearchControl() {
            const provider = new OpenStreetMapProvider();
            return new GeoSearchControl({
                provider: provider,
                showMarker: false,
                searchLabel: "Buscar dirección...",
                notFoundMessage: "Sorry, that address could not be found.",
                style: "bar",
            });
        },

        createLocateControl() {
            return new LocateControl({
                position: "topleft",
                flyTo: true,
                drawMarker: false,
                enableHighAccuracy: true,
            });
        },

        moveMarker(e) {
            const coords = e.location
                ? [e.location.y, e.location.x]
                : [e.latlng.lat, e.latlng.lng];

            this.marker.setLatLng(coords);
            this.coords = { lat: coords[0], lng: coords[1] };
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

<template>
    <div>
        <span style="color: white">{{ coords }}</span>
        <div id="user" style="height: 800px"></div>
    </div>
</template>

<script>
import {
    createMap,
    addControls,
    createTileLayer,
    createMarker,
    createSearchControl,
    createLocateControl,
    getCoordsFromEvent,
} from "../mapUtils";

// Importaciones
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";

export default {
    data() {
        return {
            map: null,
            marker: null,
            coords: null,
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
            const map = createMap("user");
            const marker = createMarker();

            addControls(map, [
                marker,
                createTileLayer(),
                createSearchControl(),
                createLocateControl(),
            ]);

            this.map = map;
            this.marker = marker;
        },

        moveMarker(e) {
            const coords = getCoordsFromEvent(e);
            this.marker.setLatLng(coords);
            this.coords = coords;
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

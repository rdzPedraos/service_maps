<template>
    <div>
        <div id="admin" style="height: 800px"></div>
    </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "@geoman-io/leaflet-geoman-free";

export default {
    mounted() {
        const map = L.map("admin").setView(L.latLng(4.570868, -74.297333), 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            //set in colombia:
            maxZoom: 18,
            attribution:
                'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(map);

        map.pm.addControls({
            position: "topleft",
            drawMarker: true,
            drawCircle: true,
            drawRectangle: true,
            drawPolyline: false,
            cutPolygon: true,
            editMode: true,
            dragMode: true,
            removalMode: true,
        });
    },
};
</script>

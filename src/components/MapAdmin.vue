<template>
    <div class="admin__container">
        <div id="admin" style="height: 800px"></div>

        <InfoBox
            class="admin__edit"
            v-if="polygonSelected"
            :polygon="polygonSelected"
            @save="savePolygon"
            @cancel="cancelPolygon"
            @delete="deletePolygon"
            @onChangecolor="setColor"
        />
    </div>
</template>

<script>
import InfoBox from "./InfoBox.vue";
import {
    createMap,
    addControls,
    createTileLayer,
    createSearchControl,
    createEditionControls,
    getLayerFromGeoJSON,
} from "../mapUtils";

export default {
    components: {
        InfoBox,
    },
    data() {
        return {
            map: null,
            polygonSelected: null,
        };
    },
    mounted() {
        // Inicialización del mapa
        this.initializeMap();
        this.loadPolygons();

        this.map.on("pm:create", (e) => {
            const { editPolygonInfo } = this;

            const polygon = e.layer;
            polygon.metadata = {
                id: "area-" + Date.now(),
                shape: polygon.toGeoJSON(),
                color: "#3388ff",
            };

            polygon.on("click", () => editPolygonInfo(polygon));
            polygon.fire("click");
        });
    },
    watch: {
        polygonSelected(polygon, oldPolygon) {
            //Si no quedo registrado, entonces eliminelo del mapa.
            if (
                oldPolygon?.metadata.id &&
                !localStorage.getItem(oldPolygon.metadata.id)
            ) {
                this.map.removeLayer(oldPolygon);
            }
        },
    },
    methods: {
        initializeMap() {
            const map = createMap("admin");
            addControls(map, [
                createTileLayer(),
                createEditionControls(),
                createSearchControl(),
            ]);
            map.locate({ setView: true });
            this.map = map;
        },

        deletePolygon(polygon) {
            localStorage.removeItem(polygon.metadata.id);
            this.polygonSelected = null;
        },

        editPolygonInfo(polygon) {
            const saved = this.getPolygon(polygon.metadata.id);
            if (saved) {
                polygon.metadata = saved;
            }

            this.polygonSelected = polygon;
        },

        cancelPolygon() {
            this.polygonSelected = null;
        },

        savePolygon(polygon) {
            const { metadata } = polygon;

            const data = JSON.stringify(polygon.metadata);
            localStorage.setItem(metadata.id, data);
            this.polygonSelected = null;
        },

        setColor(color) {
            this.polygonSelected.setStyle({ color: color });
        },

        loadPolygons() {
            const { editPolygonInfo, getPolygons } = this;
            const polygons = getPolygons();

            polygons.forEach((polygon) => {
                const layer = getLayerFromGeoJSON(polygon.shape);
                layer.setStyle({ color: polygon.color });
                layer.metadata = polygon;

                layer.on("click", () => editPolygonInfo(layer));
                this.map.addLayer(layer);
            });
        },

        getPolygons() {
            const polygons = [];

            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith("area-")) {
                    polygons.push(JSON.parse(localStorage.getItem(key)));
                }
            }

            return polygons;
        },

        getPolygon(id) {
            return JSON.parse(localStorage.getItem(id));
        },
    },
};
</script>

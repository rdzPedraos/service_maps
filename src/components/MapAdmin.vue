<template>
    <div>
        <div id="admin" style="height: 800px"></div>
    </div>
</template>

<script>
import {
    createMap,
    addControls,
    createTileLayer,
    createEditionControls,
} from "../mapUtils";

export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        // Inicialización del mapa
        this.initializeMap();
        this.map.locate({ setView: true });
    },
    methods: {
        initializeMap() {
            const map = createMap("admin");
            addControls(map, [createTileLayer(), createEditionControls()]);
            this.map = map;
        },
    },
};
</script>

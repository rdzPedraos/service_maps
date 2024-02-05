import env from "./variables";
import L from "leaflet";

//Tiles https://openmaptiles.org/docs/  - https://cloud.maptiler.com/account/keys/
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

//https://www.npmjs.com/package/leaflet-geosearch
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

//https://www.npmjs.com/package/leaflet.locatecontrol
import LocateControl from "leaflet.locatecontrol";

//https://www.npmjs.com/package/@geoman-io/leaflet-geoman-free
import "@geoman-io/leaflet-geoman-free";

// Style imports
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "./assets/animation.css";

export function createMap(target, options) {
    return L.map(target, options);
}

export function createTileLayer() {
    switch (env.MAP_PROVIDER) {
        case "maptiler":
            return new MaptilerLayer({
                apiKey: env.MAPS_KEY,
            });

        case "openstreetmap":
            return L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 18,
                    attribution:
                        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
                }
            );

        default:
            throw new Error("Invalid MAP_PROVIDER");
    }
}

export function createMarker(coords = [0, 0]) {
    return L.circleMarker(coords, {
        color: "#fff",
        fillColor: "#007bff",
        fillOpacity: 1,
        radius: 10, // Este es el radio en píxeles
        weight: 3,
        className: "pulse",
    });
}

export function createSearchControl() {
    const provider = new OpenStreetMapProvider();
    return new GeoSearchControl({
        provider: provider,
        showMarker: false,
        searchLabel: "Buscar dirección...",
        notFoundMessage: "Sorry, that address could not be found.",
        style: "bar",
    });
}

export function createLocateControl() {
    return new LocateControl({
        position: "topleft",
        flyTo: true,
        drawMarker: false,
        enableHighAccuracy: true,
    });
}

export const createEditionControls = () => {
    const control = L.Control.extend({
        onAdd: function (map) {
            // Inicializa Leaflet-Geoman en el mapa cuando se agrega el control
            map.pm.addControls({
                position: "topleft",
                drawMarker: true,
                drawCircle: true,
                drawRectangle: true,
                drawPolyline: false,
                cutPolygon: false,
                editMode: true,
                dragMode: true,
                removalMode: true,
            });

            return L.DomUtil.create("div");
        },
    });

    return new control();
};

export function addControls(map, controls) {
    controls.forEach((control) => {
        map.addControl(control);
    });
}

export function getCoordsFromEvent(event) {
    const coords = event.location
        ? [event.location.y, event.location.x]
        : [event.latlng.lat, event.latlng.lng];

    return {
        lat: coords[0],
        lng: coords[1],
    };
}

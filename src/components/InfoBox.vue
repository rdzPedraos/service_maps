<template>
    <div>
        <label>
            Nombre:
            <input type="text" v-model="fields.name" />
        </label>
        <br />
        <br />

        <label>
            Descripción:
            <input type="text" v-model="fields.description" />
        </label>
        <br />
        <br />

        <label>
            Color:
            <input type="color" v-model="fields.color" />
        </label>
        <br />
        <br />

        <button @click="onSave">Guardar</button>
        <button @click="onCancel">Cancelar</button>
        <button @click="onDelete">Eliminar</button>
    </div>
</template>

<script>
export default {
    props: {
        polygon: {
            type: Object,
        },
    },

    data() {
        return {
            fields: {
                name: "",
                description: "",
                color: "#3388ff",
            },
        };
    },

    watch: {
        //Copy info
        polygon: {
            handler(polygon) {
                this.fields = { ...polygon.metadata };
            },
            immediate: true,
        },

        "fields.color": {
            handler(color) {
                this.$emit("onChangecolor", color);
            },
        },
    },

    methods: {
        onDelete() {
            this.$emit("delete", this.polygon);
        },

        onCancel() {
            this.$emit("cancel", this.polygon);
        },

        onSave() {
            const { polygon, fields } = this;

            const newPolygon = {
                ...polygon,
                metadata: {
                    ...polygon.metadata,
                    ...fields,
                },
            };

            this.$emit("save", newPolygon);
        },
    },
};
</script>

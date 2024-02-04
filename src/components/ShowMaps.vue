<template>
    <div>
        <p style="color: white">User</p>
        <MapUser />

        <p style="color: white">Admin</p>
        <MapAdmin />
    </div>
</template>

<script>
import MapUser from "./MapUser.vue";
import MapAdmin from "./MapAdmin.vue";

export default {
    components: {
        MapUser,
        MapAdmin,
    },
};
</script>

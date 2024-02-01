<template>
    <div>
        <p>User</p>
        <MapUser />

        <p>Admin</p>
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

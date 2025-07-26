<template>
    <UApp>
        <router-view></router-view>
    </UApp>
</template>

<script setup>
import { useUserStore } from "../store/userStore.js";

useUserStore().fetch();
</script>

<style scoped>

</style>

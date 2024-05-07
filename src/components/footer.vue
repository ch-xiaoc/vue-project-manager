<script setup>
import { useWebStore } from '../stores/web';

const webStore = useWebStore();
</script>

<template>
    <hr>
    <h3>{{ webStore.webClicks }}</h3>
</template>

<style scoped>

</style>
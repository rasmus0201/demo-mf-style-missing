<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue";
</script>

<template>
  <div>
    <h1 class="host-heading">Hello from host app! - styled in host</h1>

    <demo-mf-app></demo-mf-app>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.host-heading {
  color: #42b983;
}
</style>

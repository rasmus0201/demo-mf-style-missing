<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function onClick() {
  console.log('clicked');
  count.value++
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p class="test">Test SFC scoped styling - should be red and blue</p>

  <div class="card">
    <button type="button" @click="onClick()">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.test {
  color: blue;
  background-color: red;
}
</style>

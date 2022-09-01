<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent( {
  name: "cCard"
})
</script>

<template>
  <div class="w-full shadow-md rounded bg-white flex flex-col md:flex-row">
    <slot />
  </div>
</template>

<style scoped>

</style>

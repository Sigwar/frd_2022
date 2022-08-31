<script lang="ts">
import { defineComponent } from 'vue'
import cButton from '@/components/form/button/button.component.vue'

export default defineComponent({
  name: 'cHeader',
  emits:['btn-clicked'],
  components: {
    cButton
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <header class="flex justify-between">
    <h1>{{ $t(`${name}`) }}</h1>

    <c-button class="w-48"
              @click="$emit('btn-clicked')"> {{ $t(`${btnText}`) }} </c-button>
  </header>
</template>

<style scoped>

</style>
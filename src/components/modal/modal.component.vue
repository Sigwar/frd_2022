<script lang="ts">
import { defineComponent } from 'vue';
import cBaseIcon from '@/components/base-icon/base-icon.component.vue'

export default defineComponent({
  name: 'cModal',
  components: {
    cBaseIcon
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div v-if="showModal"
       :key="title"
       @click.self="$emit('closeModal')"
       class="c-modal top-0 left-0 absolute w-[100vw] h-[100vh] flex items-center justify-center">

    <div class="rounded p-2 shadow-md w-3/6 h-3/6 bg-white">
      <div class="flex items-center justify-between p-3">
        <h2 class="text-black text-3xl">{{ title }}</h2>

        <c-base-icon icon="cross"
                     @click="$emit('closeModal')"
                     class="cursor-pointer flex justify-center"/>
      </div>

      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss"
       scoped>
.c-modal {
  background: rgba(154, 144, 144, 0.65);
}
</style>

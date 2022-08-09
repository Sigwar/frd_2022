<script>
import { reactive } from 'vue'
import cInput from '@/components/form/input/input.component.vue'

export default {
  name: "vHome",
  components: {
    cInput
  },
  setup() {
    const myForm = reactive({
      name: ''
    })

    return {
      myForm
    }
  }
}
</script>

<template>
  <c-input />
</template>

<style scoped>

</style>

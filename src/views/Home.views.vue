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
  <c-input v-model="myForm.name"
           :limit="3"
           placeholder="my-placeholder"/>
</template>

<style scoped>

</style>

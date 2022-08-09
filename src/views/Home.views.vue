<script>
import { reactive } from 'vue'
import cInput from '@/components/form/input/input.component.vue'
import cSelect from '@/components/form/select/select.component.vue'

export default {
  name: "vHome",
  components: {
    cInput,
    cSelect
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
  <c-input placeholder="placeholder"/>
  <c-select />
</template>

<style scoped>

</style>

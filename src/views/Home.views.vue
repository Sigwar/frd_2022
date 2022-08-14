<script>
import {reactive, ref} from 'vue'
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
    const options = ref(['ASD', 'DSA', 'CEE', 'DFS'])

    return {
      myForm,
      options
    }
  }
}
</script>

<template>
  {{ myForm.name }}
  <c-input v-model="myForm.name"/>

  <c-select :options="options" v-model="myForm.name"/>
</template>

<style scoped>

</style>

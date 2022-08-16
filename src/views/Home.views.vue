<script>
import {reactive, ref} from 'vue'
import cInput from '@/components/form/input/input.component.vue'
import cSelect from '@/components/form/select/select.component.vue'
import cButton from '@/components/form/button/button.component.vue'

export default {
  name: "vHome",
  components: {
    cInput,
    cSelect,
    cButton
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
  <c-button>{{ $t('click me') }}</c-button>

  <c-button button-type="ghost">{{ $t('click me') }}</c-button>
  <c-button button-type="borderless">{{ $t('click me') }}</c-button>

  <c-button button-state="success">{{ $t('click me') }}</c-button>
  <c-button button-type="ghost" button-state="success">{{ $t('click me') }}</c-button>
  <c-button button-type="borderless" button-state="success">{{ $t('click me') }}</c-button>

  <c-button button-state="second">{{ $t('click me') }}</c-button>
  <c-button button-type="ghost" button-state="second">{{ $t('click me') }}</c-button>
  <c-button button-type="borderless" button-state="second">{{ $t('click me') }}</c-button>

  <c-button button-state="danger">{{ $t('click me') }}</c-button>
  <c-button button-type="ghost" button-state="danger">{{ $t('click me') }}</c-button>
  <c-button button-type="borderless" button-state="danger">{{ $t('click me') }}</c-button>
</template>

<style scoped>

</style>

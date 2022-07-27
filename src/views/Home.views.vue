<script>
import cInput from '@/components/form/input/input.component.vue'

export default {
  name: "vHome",
  components: {
    cInput
  }
}
</script>

<template>
  <h1>{{ $t('hello') }}</h1>

  <c-input value="test"
           :limit="3"/>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CHeader from "../../../components/header/header.component.vue";

export default defineComponent({
  name: 'vSeasons',
  components: { CHeader },
  setup() {
    const fn = () => {
      console.log(``)
    }
    return {
      fn
    }
  }
})
</script>

<template>
    <c-header @btn-clicked="fn"
              btn-text="createNewSeason"
              name="seasons" />

  <main>
    <span class="block mt-[30%]">
          {{$t('noSeasons')}}
    </span>
  </main>
</template>

<style scoped>

</style>
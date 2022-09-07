<script lang="ts">
import { defineComponent, ref } from 'vue'
import CHeader from '@/components/header/header.component.vue';
import CModal from '@/components/modal/modal.component.vue';

export default defineComponent({
  name: 'vSeasons',
  components: {
    CHeader,
    CModal
  },
  setup() {

    const modal = ref(false)
    const changeStateOfModal = () => {
      modal.value = !modal.value
    }
    return {
      modal,
      changeStateOfModal
    }
  }
})
</script>

<template>
    <c-header @btn-clicked="changeStateOfModal"
              btn-text="createNewSeason"
              name="seasons" />

  <main>
    <Teleport to="#app">
      <c-modal :show-modal="modal"
               :title="$t('createNewSeasons')"
               @close-modal="changeStateOfModal">

      </c-modal>
    </Teleport>

    <span class="block mt-[10%]">
          {{$t('noSeasons')}}
    </span>
  </main>
</template>

<style scoped>

</style>

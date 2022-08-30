<script lang="ts">
import { onBeforeMount, defineComponent } from 'vue';
import { useGlobalStore } from './store/global';

export default defineComponent( {
  name: 'App',
  setup() {
    const store = useGlobalStore();

    onBeforeMount(()=> {
      store.changeLanguage(window.navigator.language.split('-')[0])
      store.setTokenFromCookie();
    })
  }
})
</script>

<template>
  <router-view />
</template>

<style lang="scss"
       scoped>

</style>

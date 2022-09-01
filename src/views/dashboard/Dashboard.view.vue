<script lang="ts">
import { onBeforeMount, defineComponent } from 'vue';
import navBar from '@/components/navbar/nav-bar.component.vue'
import {useGlobalStore} from '@/store/global';
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'vDashboard',
  components: {
    navBar
  },
  setup() {
    const storeGlobal = useGlobalStore();
    const router = useRouter();

    onBeforeMount(() => {
      storeGlobal.setTokenFromCookie()
      if(storeGlobal.token === '') {
        router.push({ name: 'Login'})
      }
    })
  }
});
</script>

<template>
  <nav-bar />

  <div class="grid-main-aside w-full mx-auto my-10 px-10">
    <router-view />
  </div>
</template>

<style lang="scss"
       scoped>

</style>

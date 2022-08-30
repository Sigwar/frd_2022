<script lang="ts">
import { defineComponent, reactive } from 'vue';
import baseIcon from '@/components/base-icon/base-icon.component.vue';
import { useGlobalStore } from '@/store/global';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'navBar',
  components: {
    baseIcon
  },
  setup() {
    const store = useGlobalStore();
    const router = useRouter();

    const navBar = reactive({
      links: ['seasons', 'tournament', 'ranking', 'settings', 'logout']
    })

    const goTo = (link: string): void => {
      if(link === 'logout') {
        store.logOut();
        router.push({name: 'Login'})
      }
    }

    return {
      navBar,
      goTo
    }
  }
})
</script>

<template>
<nav class="cursor-pointer top-0 left-0 w-24 flex flex-col h-[100vh] items-center justify-center border-r-2 border-solid border-neutral-200 dark:border-neutral-700">

  <base-icon v-for="link in navBar.links"
             :key="link"
             :icon="link"
             @click="goTo(link)" />
</nav>
</template>

<style scoped>

</style>
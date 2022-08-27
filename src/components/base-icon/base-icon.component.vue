<script>
import {defineComponent} from 'vue';
import tournament from './icons/tournament.icon.vue';
import seasons from './icons/seasons.icon.vue';
import ranking from './icons/ranking.icon.vue';
import settings from './icons/settings.icon.vue';
import logout from './icons/logout.icon.vue';

export default defineComponent({
  name: 'baseIcon',
  props: {
    icon: {
      type: String,
      default: () => 'logout'
    }
  },
  components: {
    seasons,
    logout,
    tournament,
    ranking,
    settings
  },
})
</script>


<template>
  <div class="flex flex-col items-center justify-center py-4">
    <component :is="icon"
               height="32"
               width="32" />
    <span>{{ icon.toLocaleUpperCase() }}</span>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import tournament from './icons/tournament.icon.vue';
import seasons from './icons/seasons.icon.vue';
import ranking from './icons/ranking.icon.vue';
import settings from './icons/settings.icon.vue';
import logout from './icons/logout.icon.vue';
import cross from './icons/cross.icon.vue'

export default defineComponent({
  name: 'baseIcon',
  props: {
    icon: {
      type: String,
      default: () => 'logout'
    },
    showText: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    cross,
    seasons,
    logout,
    tournament,
    ranking,
    settings
  },
})
</script>


<template>
  <div class="py-2">
    <component :is="icon"
               height="30"
               width="30" />

    <span v-if="showText">{{ icon.toLocaleUpperCase() }}</span>
  </div>
</template>

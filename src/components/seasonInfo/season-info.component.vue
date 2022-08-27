<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent( {
  name: 'cSeasonInfo',
  props: {
    season: {
      type: String,
      default: () => '1'
    }
  }
})
</script>

<template>
  <aside
      class="relative z-0 py-4 overflow-hidden w-full justify-center items-center md:flex md:w-6/12 bg-gray-400 bg-cover bg-soccer flex-col">
    <div class="bg absolute"></div>
    <div class="bg bg2 absolute"></div>
    <div class="bg bg3 absolute"></div>
    <h1 class="text-white text-4xl sm:text-7xl font-bold uppercase">{{ $t('antologic') }}</h1>
    <h2 class="text-white text-2xl sm:text-4xl font-thin uppercase font-second tracking-widest">
      {{ $t('season {number}', { number: season }) }}</h2>
  </aside>
</template>

<style lang="scss"
       scoped>
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(45deg, #ed1a2a 50%, #22434c 40%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3 {
  animation-duration: 5s;
}

@keyframes slide {
  0% {
    transform: translateX(-15%);
  }
  100% {
    transform: translateX(15%);
  }
}
</style>

<script>
import cCard from '@/components/card/card.component.vue';
import cInput from '@/components/form/input/input.component.vue';
import cButton from '@/components/form/button/button.component.vue'
import { useRegister } from './hooks/useRegister.js';

export default {
  name: 'vRegister',
  components: {
    cCard,
    cInput,
    cButton,
  },
  setup() {

    const { form, errorMsg, registerUser } = useRegister();

    return {form, errorMsg, registerUser}
  }
}
</script>


<template>
  <main class="w-full flex items-center justify-center">
    <c-card>
      <aside
          class="relative z-0 py-4 overflow-hidden w-full justify-center items-center md:flex md:w-6/12 bg-gray-400 bg-cover bg-soccer flex-col">
        <div class="bg absolute"></div>
        <div class="bg bg2 absolute"></div>
        <div class="bg bg3 absolute"></div>
        <h1 class="text-white text-4xl sm:text-7xl font-bold uppercase">{{ $t('antologic') }}</h1>
        <h2 class="text-white text-2xl sm:text-4xl font-thin uppercase font-second tracking-widest">
          {{ $t('season {number}', {number: 1}) }}</h2>
      </aside>

      <div class="w-full p-6 text-black flex flex-col justify-between md:w-6/12">
        <h1 class="text-4xl sm:text-7xl"> {{ $t('sign up') }}</h1>

        <div class="">
          <c-input v-model="form.nick"
                   :error-msg="errorMsg.nick"
                   :placeholder="$t('nick')"/>

          <c-input v-model="form.email"
                   :error-msg="errorMsg.email"
                   type="email"
                   pattern=".+@antologic\.com"
                   :placeholder="$t('email')"/>

          <c-input v-model="form.password"
                   :error-msg="errorMsg.password"
                   type="password"
                   :placeholder="$t('password')"/>

          <c-input v-model="form.repeatPassword"
                   :error-msg="errorMsg.repeatPassword"
                   type="password"
                   :placeholder="$t('repeat password')"/>
        </div>

        <div class="p-3">
          <c-button @click="registerUser">{{ $t('register account') }}</c-button>

          <c-button class="mt-3"
                    button-type="borderless"
                    button-state="second">{{ $t('return to login page') }}
          </c-button>
        </div>
      </div>
    </c-card>
  </main>
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
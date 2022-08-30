<script lang="ts">
import {defineComponent} from 'vue';
import cCard from '@/components/card/card.component.vue';
import cInput from '@/components/form/input/input.component.vue';
import cButton from '@/components/form/button/button.component.vue'
import cSeasonInfo from '@/components/seasonInfo/season-info.component.vue';
import { useRegister } from './hooks/useRegister';

export default defineComponent( {
  name: 'vRegister',
  components: {
    cButton,
    cCard,
    cInput,
    cSeasonInfo
  },
  setup() {

    const { form, errorMsg, registerUser, goToLoginPage } = useRegister();

    return { form, errorMsg, registerUser, goToLoginPage }
  }
})
</script>


<template>
  <main class="px-12 w-full flex items-center justify-center mx-auto md:px-0 md:w-10/12">
    <c-card class="min-h-[70%]">
      <c-season-info />

      <div class="w-full p-6 text-black flex flex-col justify-between md:w-6/12">
        <h1 class="text-4xl sm:text-7xl"> {{ $t('sign up') }}</h1>

        <div>
          <c-input v-model="form.login"
                   :error-msg="errorMsg.login"
                   :placeholder="$t('login')"/>

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
                    button-state="second"
                    @click="goToLoginPage">{{ $t('return to login page') }}
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

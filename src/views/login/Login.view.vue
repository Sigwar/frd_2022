<script lang="ts">
import {defineComponent} from 'vue';
import cButton from '@/components/form/button/button.component.vue';
import cCard from '@/components/card/card.component.vue';
import cInput from '@/components/form/input/input.component.vue';
import cSeasonInfo from '@/components/seasonInfo/season-info.component.vue';
import { useLogin } from './hook/useLogin'

export default defineComponent( {
  name: 'vLogin',
  components: {
    cButton,
    cCard,
    cInput,
    cSeasonInfo
  },
  setup() {
    const { form, errorMsg, loginUser, goToRegisterPage } = useLogin();

    return { form, errorMsg, loginUser, goToRegisterPage }
  }
})
</script>

<template>
  <main class="grid-main max-w-[64rem] px-12 w-full flex items-center justify-center mx-auto md:px-0 md:w-10/12">
    <c-card class="min-h-[70%] justify-between">
      <c-season-info/>

      <form @submit.prevent="loginUser"
            class="w-full p-6 text-black flex flex-col justify-between h-[50vh] md:h-auto md:w-6/12">

        <h1 class="text-4xl sm:text-7xl">{{ $t('sign in') }}</h1>

        <div>
          <c-input v-model="form.login"
                   :error-msg="errorMsg.login"
                   :placeholder="$t('login')"/>

          <c-input v-model="form.password"
                   :error-msg="errorMsg.password"
                   type="password"
                   :placeholder="$t('password')"/>
        </div>

        <div class="p-3">
          <c-button type="submit">{{ $t('sign in') }}</c-button>

          <c-button class="mt-3"
                    button-type="borderless"
                    button-state="second"
                    @click="goToRegisterPage">{{ $t('register new user') }}
          </c-button>
        </div>
      </form>
    </c-card>
  </main>
</template>

<style lang="scss"
       scoped>

</style>

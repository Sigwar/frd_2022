<script>
import {computed, ref} from 'vue'

export default {
  name: 'cInput',
  props: {
    errorMsg: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const input = ref(null);
    const isFocus = ref(false);

    const isError = computed(() => {
      return props.errorMsg !== ''
    })

    const focusInput = () => {
      input.value.focus();
      isFocus.value = true
    }

    const isPlaceholderTop = computed(() => {
      return props.modelValue !== '' || isFocus.value
    })

    return {
      input,
      isError,
      isFocus,
      focusInput,
      isPlaceholderTop
    }
  }
};
</script>

<template>
  <div class="p-3 relative">

    <div class="relative">
      <input ref="input"
             v-bind="$attrs"
             :class="[isError ? 'border-rose-500' : 'border-gray-400']"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @focus="isFocus = true"
             @focusout="isFocus = false"
             class="h-[60px] py-2 focus:border-blue-700 border-2 bg-transparent px-2 outline-none w-full text-lg d-flex items-center disabled:opacity-75"/>

      <span v-if="placeholder"
            @click="focusInput"
            :class="[isPlaceholderTop ? 'top-0' : 'top-1/2' ]"
            class="text-lg duration-100 p-2 py-1 absolute left-4 -translate-y-1/2 bg-white text-neutral-500 font-semibold">
        {{ placeholder }}</span>
    </div>

    <span v-if="isError"
          class="px-1 w-full text-left inline-block text-rose-500 text-xs">
      {{ $t(`${errorMsg}`) }}
    </span>
  </div>
</template>

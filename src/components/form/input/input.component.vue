<script>
import { computed, ref } from 'vue'
export default {
  name: "cInput",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 10,
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: '',
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const input = ref(null);
    const isFocused = ref(false);

    const isTextTooLong = computed(() => {
      return props.modelValue.length > props.limit
    })

    const focusInput = () => {
      input.value.focus();
      isFocused.value = true
    }

    const isPlaceholderTop = computed(()=> {
      return props.modelValue !== '' || isFocused.value
    })

    return {
      input,
      isFocused,
      focusInput,
      isTextTooLong,
      isPlaceholderTop
    }
  }
};
</script>

<template>
  <div class="p-3 relative">

    <div class="relative">
      <input ref="input"
             :class="{'border-rose-500' : isTextTooLong}"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             @focus="isFocused = true"
             @focusout="isFocused = false"
             class="rounded-lg py-4 border-gray-400 focus:border-indigo-600 border-2 bg-transparent px-2 outline-none w-full"/>

      <span v-if="placeholder"
            @click="focusInput"
            :class="{'top-0' : isPlaceholderTop }"
            class="duration-100 p-2 py-1 absolute top-1/2 left-4 -translate-y-1/2 bg-neutral-800 text-neutral-500 font-semibold">{{placeholder}}</span>
    </div>

    <span v-if="isTextTooLong"
          class="px-1 w-full text-left inline-block text-rose-500 text-xs">
      {{ $t('limited to {limit} chars', { limit: limit }) }}
    </span>
  </div>
</template>
<script>
import {computed, ref} from 'vue'

export default {
  name: 'cSelect',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    options: {
      type: Array,
      default: () => []
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue'],

  setup(props) {

    const select = ref(null);
    const isFocus = ref(false);

    const isPlaceholderTop = computed(() => {
      return props.modelValue !== '' || isFocus.value
    })

    return {
      select,
      isFocus,
      isPlaceholderTop
    }
  }
}
</script>
<template>
  <div class="relative"
       @blur="isFocus = false">

    <div ref="select"
         :tabindex="tabIndex"
         v-bind="$attrs"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         @click.self.stop="isFocus = !isFocus"
         @focusout="isFocus = !isFocus"
         :class="{'border-indigo-600' : isFocus}"
         class="h-[60px] z-10 border-gray-400 rounded-lg py-4 border-2 bg-transparent px-2 outline-none w-full text-left">

      <span class="">{{ modelValue }}</span>
    </div>

    <span v-if="placeholder"
          @click.self.stop="isFocus = !isFocus"
          :class="[isPlaceholderTop ? 'top-0 z-1' : 'top-1/2 z-[-1]' ]"
          class="pointer-events-none duration-100 p-2 py-1 absolute left-4 -translate-y-1/2 bg-neutral-800 text-neutral-500 font-semibold">

          {{ placeholder }}
        </span>

    <Transition>
      <ul v-if="isFocus"
          class="absolute w-full border-2 rounded-lg border-solid border-indigo-600 mt-1">

        <li v-for="option in options"
            :key="option"
            @click="$emit('update:modelValue', option)"
            class="cursor-pointer py-2 hover:bg-indigo-600/40">{{ option }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

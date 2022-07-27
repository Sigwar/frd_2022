<script>
import { computed } from 'vue'
export default {
  name: "cInput",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 12,
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isTextTooLong = computed(() => {
      return props.value.length > props.limit
    })

    return { isTextTooLong }
  }
};
</script>

<template>
  <div class="p-3 rounded-md bg-gray-200 inline-block">
    <input class="border px-2"
           :class="isTextTooLong ? 'border-red-500 bg-red-200' : undefined"
           v-model="value"
           @input="$emit('input', value)"
    />
    <p v-if="isTextTooLong" class="text-red-600 text-xs">
      Limited to {{ limit }} chars.
    </p>
  </div>
</template>
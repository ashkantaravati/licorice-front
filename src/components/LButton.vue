<script setup>
import { computed } from 'vue'
import { bool, object, string, oneOfType } from 'vue-types'

const props = defineProps({
  secondary: bool(),
  large: bool(),
  small: bool(),
  disabled: bool(),
  to: oneOfType([string(), object()])
});
const classes = computed(() => ({
  'disabled': props.disabled,
  'bg-yellow-500 text-gray-700': !props.secondary,
  'bg-pink-600 text-white': props.secondary,
}))
</script>

<template>
    <div>
        <button @click="$emit('click')" :class="['my-2 py-1 font-light px-6 mx-2 rounded-lg',classes]"> <slot /></button>
    </div>
</template>

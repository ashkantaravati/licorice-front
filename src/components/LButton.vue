<script setup>
import { computed } from 'vue'
import { bool, object, string, oneOfType } from 'vue-types'

const props = defineProps({
  secondary: bool(),
  large: bool(),
  small: bool(),
  link: bool(),
  disabled: bool(),
  to: oneOfType([string(), object()])
});

const elementType = computed(() => {
  if (props.link.value === true) {
    return "RouterLink"
  }
  return 'button'
})
const classes = computed(() => ({
  'my-2 mx-2 py-1 rounded-lg': !props.link,
  'disabled': props.disabled,
  'bg-yellow-500 px-10 text-gray-700': !props.link && !props.secondary,
  'px-6 bg-pink-600 text-white': props.secondary && !props.link,
  'underline text-yellow-500 justify-center': props.link
}))

const emit = defineEmits(["click"])
</script>

<template>
  <component :is="elementType" @click="emit('click')" :class="[' font-light px-', classes]">
    <slot />
  </component>
</template>

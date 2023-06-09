<template >
  <div class="flex flex-col grow">

    <span v-if="label" class="">{{ label }}</span>
    <input v-model="value" :placeholder="props.placeholder"
      :class="['grow my-2 py-2 px-4 text font-thin rounded-lg border-black border-solid border', classes]"
      :type="typeAttr" :id="id">
  </div>
</template>
<script setup>
import { computed, ref, unref, watch } from 'vue'
import { bool, string } from 'vue-types'

const props = defineProps({
  modelValue: string(),
  placeholder: string(),
  label: string(),
  password: bool(),
  id:string()
});
const emit = defineEmits(['update:modelValue']);


const classes = computed(() => ({
  'disabled': props.disabled,
}));
const typeAttr = computed(() => {
  if (props.password === true)
    return 'password'
  return 'text'
});


const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
<style lang="css">
.textarea {
  min-height: 10rem;
}
</style>
<template >
  <div class="flex flex-col grow">

    <span v-if="label" class="">{{ label }}</span>
    <textarea v-model="value"
      class="textarea grow my-2 py-2 px-4 text font-thin rounded-lg border-black border-solid border" :id="id"></textarea>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { string } from 'vue-types'

const props = defineProps({
  modelValue: string(),
  label: string(),
  id: string()
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:model-value', value)
  }
})
</script>
<style lang="css">
.textarea {
  min-height: 10rem;
}
</style>
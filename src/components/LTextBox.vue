<template >
  <div class="flex flex-col
  ">

      <span v-if="label" class="">{{label}}</span>
        <component v-model="value" :is="elementType"
            :placeholder="props.placeholder"
            :class="['grow my-2 py-2 px-4 text font-thin rounded-lg border-black border-solid border',classes]" type="text"
             id=""></component>
  </div>

</template>
<script setup>
import { computed } from 'vue'
import { bool, string } from 'vue-types'

defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: string(),
    placeholder: string(),
    textarea: bool(),
    label:string()
});
const classes = computed(() => ({
  'disabled': props.disabled,
  'textarea': props.textarea,
}));
const elementType = computed(() => {
    if (props.textarea) {
        return 'textarea'
    }
    return 'input'
})

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
    .textarea{
min-height: 10rem;
    }
</style>
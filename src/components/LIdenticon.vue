<template >
        <div class="flex justify-center bg-neutral-200 w-12 h-12 rounded-3xl">
            <span class="align-middle self-center">
                {{initials}}

            </span>
        </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps(["text"]);
const initials = computed(()=>props.text.split(' ').map((item) => item.charAt(0)).join('').toUpperCase())
</script>
<style lang="">
    
</style>
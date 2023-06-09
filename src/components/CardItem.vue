<template>
    <div class="flex flex-col grow bg-white py-2 px-4 text font-thin rounded-xl border-black border-solid border">
        <div class="flex justify-center text-gray-400">{{ card.createdAt }}</div>
        <div class="flex justify-stretch">
            <p v-if="shouldShowMore">

                {{ card.content }}
            </p>
            <p v-else>
                {{ shortContent }}
            </p>
        </div>
        <div class="flex justify-center"><button class="text-pink-300" @click="toggleShowMore">
                <template v-if="shouldShowMore">
                    Show Less
                </template>
                <template v-else>
                    Show More
                </template>
            </button> </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { object } from 'vue-types';

const props = defineProps({
    card:object()
})
const shouldShowMore = ref(false);
const shortContent = computed(() => props.card.content.substring(0, 150).concat("..."));

const toggleShowMore = () => shouldShowMore.value = !shouldShowMore.value
</script>

<style lang="scss" scoped></style>
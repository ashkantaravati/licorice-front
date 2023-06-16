<template>
    <div class="flex flex-col grow bg-white py-2 px-4 text font-thin rounded-xl border-black border-solid border">
        <div class="flex justify-center text-gray-400">{{createdAtDateTime }}</div>
        <div class="flex justify-stretch">
            <p v-if="isShowingMore">

                {{ card.content }}
            </p>
            <p v-else>
                {{ shortContent }}
            </p>
        </div>
        <div v-if="contentIsNotShort" class="flex justify-center"><button class="text-pink-300" @click="toggleShowMore">
                <template v-if="isShowingMore">
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

const MAX_CHARS = 150;
const props = defineProps({
    card: object()
})
const createdAtDateTime = computed(()=>new Date(props.card.createdAt).toDateString())

const isShowingMore = ref(false);
const shortContent = computed(() => props.card.content.substring(0, MAX_CHARS).concat("..."));
const contentIsNotShort = computed(() => props.card.content.length > MAX_CHARS);
const toggleShowMore = () => isShowingMore.value = !isShowingMore.value
</script>

<style lang="scss" scoped></style>
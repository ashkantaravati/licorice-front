<template>
    <div class=" my-1 px-2 py-1 flex flex-row lg:w-1/2 bg-white rounded-lg border-black border-solid border">
        <LIdenticon :text="wall.title"></LIdenticon>
        <div class="grow mx-2 ">
            <div class="text-lg font-semibold">{{ wall.title }}</div>
            <div>{{ wall.cubeCount }} Buddies Joined</div>
        </div>
        <div>
            <LButton @click="$router.push({ name: 'wallOverview', params: { wallId: wall.id } })" secondary>Enter</LButton>
        </div>
    </div>
</template>

<script setup>
import LIdenticon from './LIdenticon.vue';


const props = defineProps(["wall"]);
</script>


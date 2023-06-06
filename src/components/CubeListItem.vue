<template>
    <div class=" my-1 px-2 py-1 flex flex-row lg:w-1/2 bg-white rounded-lg border-black border-solid border">
        <LIdenticon class="my-auto" :text="cube.name"></LIdenticon>
        <div class="flex flex-col grow mx-2 my-auto ">
            <div class="text-lg font-semibold">{{ cube.name }}</div>
            <div>Received {{ cube.cardCount }} Cards</div>
        </div>
        <div class="flex flex-col justify-center">
            <LButton @click="$router.push({ name: 'putCard', params: { cubeId: cube.id } })" secondary>Put Card</LButton>
            <LButton link @click="$router.push({ name: 'insideCube', params: { cubeId: cube.id } })">
                Look Inside
            </LButton>
        </div>
    </div>
</template>

<script setup>
import LIdenticon from './LIdenticon.vue';


const props = defineProps(["cube"]);
</script>


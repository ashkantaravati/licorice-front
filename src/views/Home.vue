<template>
    <div>
        <span class="text-l text-gray-400">Virtual SugarCubes for every gathering</span>
        <div class="flex flex-col lg:flex-row justify-center">
            <img class="" src="../assets/main-illust.svg" alt="">
            <section class="my-2">
                <div class="flex">
                    <LTextBox v-model="wallKey" class="self-stretch" placeholder="#enter-wall-id"></LTextBox>
                    <LButton secondary @click="$router.push({name:'wallOverview',params:{wallId:wallKey}})">Enter</LButton>
                </div>
                <div class="flex justify-center">

                    <span class="justify-center text-gray-400">or</span>
                </div>
                <div class="flex justify-center">

                    <LButton @click="$router.push({ name: 'createWall' })" class="flex self-stretch">Create a Wall</LButton>
                </div>
            </section>
        </div>
        <section>
            <LHeading>Public Walls</LHeading>
            <div class="flex flex-col lg:flex-row lg:space-x-3 mt-3 ">
                <WallListItem :wall="wall" v-for="wall in publicWalls" :key="wall.id" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import WallListItem from '../components/WallListItem.vue';
import LButton from '../components/LButton.vue';
import LTextBox from '../components/LTextBox.vue';
import LHeading from '../components/LHeading.vue';

const wallKey = ref("")
const getPublicWalls = () => {
    // GET /walls/?isPublic=true
    publicWalls.value = [{
        id: "xeq-Qweqe-1",
        title: "Harmony Gang 1",
        cubeCount: 5,
    },
    {
        id: "asd-Qweqe-1",
        title: "Harmony Gang 2",
        cubeCount: 5,
    },
    {
        id: "eqw-Qweqe-1",
        title: "Harmony Gang 3",
        cubeCount: 5,
    }]
}
const publicWalls = ref([])

onMounted(()=>{
    getPublicWalls();
})
</script>
  
<style></style>
  
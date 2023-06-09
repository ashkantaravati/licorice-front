<template>
    <div>
        <span class="text-l text-gray-400">Virtual SugarCubes for every gathering</span>
        <div class="flex flex-col lg:flex-row justify-center">
            <img class="" src="../assets/main-illust.png" alt="">
            <section class="my-2">
                <!-- <div class="flex">
                    <LTextBox v-model="wallKey" class="self-stretch" placeholder="#enter-wall-id"></LTextBox>
                    <LButton secondary @click="$router.push({name:'wallOverview',params:{wallId:wallKey}})">Enter</LButton>
                </div>
                <div class="flex justify-center">

                    <span class="justify-center text-gray-400">or</span>
                </div> -->
                <div class="flex justify-center">

                    <LButton @click="$router.push({ name: 'createWall' })" class="flex self-stretch">Create a Wall</LButton>
                </div>
            </section>
        </div>
        <section>
            <LHeading>Public Walls</LHeading>
            <template v-if="loaded">

                <div class="flex flex-col lg:flex-row mt-3 lg:flex-wrap">
                    <WallListItem :wall="wall" v-for="wall in publicWalls" :key="wall.key" />
                </div>
            </template>
            <template v-else>
    <span>

        Loading...
    </span>
</template>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import WallListItem from '../components/WallListItem.vue';
import LButton from '../components/LButton.vue';
import LTextBox from '../components/LTextBox.vue';
import LHeading from '../components/LHeading.vue';
import { api } from "../utils";

const wallKey = ref("")
const getPublicWalls = () => {
api.getJSON("/api/Walls?includePrivate=true").then(result=>publicWalls.value=result).then(()=>loaded.value=true)
}
const publicWalls = ref([])
const loaded = ref(false);

onMounted(()=>{
    getPublicWalls();
})
</script>
  
<style></style>
  
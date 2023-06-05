<template lang="">
    <div>
        <LHeading>
{{wall.title}}'s Wall
        </LHeading>
        <div class="flex justify-center">

            <LButton @click="$router.push({ name: 'joinWall' ,params:{ wallId: wall.id }})">
                Join this Wall
            </LButton>
        </div>
        <div class="flex flex-col mt-3 ">
                <CubeListItem :cube="cube" v-for="cube in wall.cubes" :key="cube.id" />
            </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import CubeListItem from '../components/CubeListItem.vue'


const wall = ref({
    id:'qweqw-qwqw-qw',
    title: "Harmony Gang", cubes: [
        {
            id: "asd-qwerty-2",
            name: "Ashkan T",
            cardCount: 3
        },
        {
            id: "asd-qwerty-2",
            name: "Maryam",
            cardCount: 3
        },
        {
            id: "asd-qwerty-2",
            name: "Alireza",
            cardCount: 3
        },
        {
            id: "asd-qwerty-2",
            name: "Sara",
            cardCount: 3
        }
    ]
})
</script>
<style lang="">
    
</style>
<template lang="">
    <div>

        <template v-if="loaded">
            <LHeading>
{{wall.title}}'s Wall
        </LHeading>
        <div class="flex justify-center">

            <LButton @click="$router.push({ name: 'joinWall' ,params:{ wallId: props.wallId }})">
                Join this Wall
            </LButton>
        </div>
        <div class="flex flex-col mt-3 ">
            <span v-if="wall.cubes.length===0">
            No buddy has put up their cube yet!
            </span>
                <CubeListItem :cube="cube" v-for="cube in wall.cubes" :key="cube.id" />
            </div>
        </template>
<template v-else>
    <span>

        Loading...
    </span>
</template>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import CubeListItem from '../components/CubeListItem.vue'
import { api } from "../utils";

const props = defineProps(["wallId"]);
const wall = ref({})
onMounted(() => {
    api.getJSON(`/api/Walls/${props.wallId}`).then(result => wall.value = result).then(() => loaded.value = true)
})
const loaded = ref(false);
</script>
<style lang="">
    
</style>
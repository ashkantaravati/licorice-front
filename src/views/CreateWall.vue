<template lang="">
    <LHeading>
        Create a New Wall
    </LHeading>
    <div class="flex flex-col">
        
        <LTextBox v-model="newWall.title" label="Wall Title" />
        <LTextBox v-model="newWall.creator" label="Your Name" />
        <!-- <LTextBox v-model="newWall.creatorEmail" label="Your Email" /> -->
        <LTextarea v-model="newWall.descriptions" label="Wall Descriptions" />

    </div>
    <div class="flex justify-center">

<LButton @click="submit" class="flex self-stretch">Create</LButton>
</div>
</template>
<script setup>
import { reactive } from 'vue';
import { api } from '../utils';
import { useRouter } from 'vue-router';

const newWall = reactive({ title: "", creator: "", descriptions: "",isPublic:true })
const router = useRouter();
const submit=()=>{
    api.postJSON("/api/Walls", newWall).then((wall)=>router.push({name:"wallOverview",params:{wallId:wall.key}}))
}
</script>
<style lang="">
    
</style>
<template lang="">
    <LHeading>
        Create a New Wall
    </LHeading>
    <div class="flex flex-col">
        
        <LTextBox v-model="newWall.title" label="Wall Title" />
        <LTextBox v-model="newWall.creatorName" label="Your Name" />
        <LTextBox v-model="newWall.creatorEmail" label="Your Email" />
        <LTextBox v-model="newWall.descriptions" label="Wall Descriptions" textarea />

    </div>
    <div class="flex justify-center">

<LButton @click="" class="flex self-stretch">Create</LButton>
</div>
</template>
<script setup>
import { ref } from 'vue';

const newWall = ref({ title: "", creatorName: "", creatorEmail: "", descriptions: "" })
</script>
<style lang="">
    
</style>
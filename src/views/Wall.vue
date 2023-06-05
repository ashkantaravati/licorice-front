<template lang="">
    <div>
        <LHeading>
{{state.title}}'s Wall
        </LHeading>
        <div class="flex justify-center">

            <LButton>
                Join this Wall
            </LButton>
        </div>
        <div class="flex flex-col mt-3 ">
                <BuddyListItem :buddy="buddy" v-for="buddy in state.buddies" :key="buddy.id" />
            </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import BuddyListItem from '../components/BuddyListItem.vue'


const state = ref({
    title: "Harmony Gang", buddies: [
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
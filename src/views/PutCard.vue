<template lang="">
    <div >
        <LHeading>
            Putting a card in {{buddyName}}'s Cube'
        </LHeading>
        <LTextBox textarea label="Your Message"></LTextBox>
        <div class="flex justify-center">

            <LButton @click="submitCard">Put</LButton>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const buddyName = ref("Ashkan")
const submitCard = (function () {
    // send POST request to the server
    // if successful, navigate to wall.
    router.push({name:"wallOverview",params:{wallId:1}});
});
</script>
<style lang="">
    
</style>
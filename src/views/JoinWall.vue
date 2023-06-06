<template>
    <div>
        <LHeading>

            Put up your Own Cube
        </LHeading>
        <div class="flex flex-col">
        
        <LTextBox v-model="newCube.name" label="Your Name" />
        <LTextBox v-model="newCube.passphrase" label="Your Desired Passphrase" />
        <LTextBox v-model="newCube.passphraseConfirmation" label="Confirm Passphrase" />


    </div>
    <div class="flex justify-center">

<LButton @click="submitCube" class="flex self-stretch">Create</LButton>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newCube = ref({
    name:"",
    passphrase:"",
    passphraseConfirmation:""

});

const submitCube = (function () {
    // send POST request to the server
    // if successful, navigate to wall.
    router.push({name:"wallOverview",params:{wallId:1}});
});
</script>

<style lang="scss" scoped>

</style>
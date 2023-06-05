<template >
    <div v-if="locked">
        <LHeading>Unlock Your Cube</LHeading>
        <LTextBox v-model="passphrase" label="Enter Passphrase"></LTextBox>
        <LButton password @click="locked=false">
            Unlock
        </LButton>
    </div>
    <div v-else>
        <LHeading>Inside Your Cube</LHeading>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import LHeading from '../components/LHeading.vue';

const locked = ref(true);

const passphrase = ref("")

</script>
<style >
    
</style>
<template >
    <div v-if="locked">
        <LHeading>Unlock Your Cube</LHeading>
        <LTextBox v-model="passphrase" label="Enter Passphrase"></LTextBox>
        <LButton password @click="unlock">
            Unlock
        </LButton>
    </div>
    <div v-else>
        
        <LHeading>Inside Your Cube</LHeading>
        <template v-if="loaded">
            <span v-if="cube.cards.length===0"></span>
            <CardItem class="my-4" v-for="card in cube.cards" :key="card.id" :card="card"></CardItem>
        </template>
        <template v-else>
            <span>You haven't received any cards yet.</span>
        </template>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
import LHeading from '../components/LHeading.vue';
import CardItem from '../components/CardItem.vue';
import { api } from '../utils';
import { string } from 'vue-types';

const locked = ref(true);

const passphrase = ref("")

const props = defineProps({
    wallId: string(),
    cubeId: string(),
});

const cube = ref({});

const unlock = () => {
    if (passphrase.value.length >= 4) {

        const credentials = {
            key: props.cubeId,
            passphrase: passphrase.value
        };
        api.postJSON("/api/cubes/unlock", credentials).then(response => cube.value = response).then(() => locked.value = false)
    }
}
</script>
<style ></style>
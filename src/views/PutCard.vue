<template lang="">
    <div >
        <LHeading>
            Putting a card in {{name}}'s Cube
        </LHeading>
        <LTextarea v-model="cardContent" label="Your Message"></LTextarea>
        <div class="flex justify-center">

            <LButton @click="submitCard">Put</LButton>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { string } from 'vue-types';
import { api } from '../utils';
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()

const router = useRouter()

const props = defineProps({
    wallId: string(),
    cubeId: string(),
    name:string()
});
const cardContent = ref("");
const submitCard = (function () {
    const payload = { cubeKey: props.cubeId, content: cardContent.value }
    api.postJSON("/api/cards", payload).then(() => {
        notify({
                title: "Card Added Successfully!",
                type: "success"
            });
        router.push({ name: "wallOverview", params: { wallId: props.wallId } });
    })
});
</script>
<style lang="">
    
</style>
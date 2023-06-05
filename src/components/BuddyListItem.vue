<template>
    <div class=" my-1 px-2 py-1 flex flex-row lg:w-1/2 bg-white rounded-lg border-black border-solid border">
        <LIdenticon :text="buddy.name"></LIdenticon>
        <div class="grow mx-2 ">
            <div class="text-lg font-semibold">{{ buddy.name }}</div>
            <div>Received {{ buddy.cardCount }} Cards</div>
        </div>
        <div>
            <LButton @click="$router.push(`/put/${buddy.id}`)" secondary>Put Card</LButton>
        </div>
    </div>
</template>

<script setup>
import LIdenticon from './LIdenticon.vue';


const props = defineProps(["buddy"]);
</script>
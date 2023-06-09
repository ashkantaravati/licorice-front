<template>
    <div>
        <LHeading>

            Put up your Own Cube
        </LHeading>
        <div class="flex flex-col">
        
        <LTextBox id="name" v-model="form.name" label="Your Name" />
        <LTextBox id="passphrase" password v-model="form.passphrase" label="Your Desired Passphrase" />
        <LTextBox id="passphraseconf" password v-model="form.passphraseConfirmation" label="Confirm Passphrase" />


    </div>
    <div class="flex justify-center">

<LButton @click="submitCube" class="flex self-stretch">Create</LButton>
</div>
    </div>
</template>

<script setup>
import { reactive,computed } from 'vue';
import { useRouter } from 'vue-router';
import { string } from 'vue-types';
import { api } from "../utils";

const router = useRouter()
const form = reactive({
    name:"",
    passphrase:"",
    passphraseConfirmation:""

});
const props = defineProps({
  wallId:string()
});

const formIsValid = computed(()=>{
    const f = form;
    const noFieldIsEmpty = f.name.length>=3 && f.passphrase.length>=4;
    const passphraseMatch = f.passphrase === f.passphraseConfirmation;

    return noFieldIsEmpty && passphraseMatch;
})

const submitCube = (function () {
    if(formIsValid.value === true ){
        api.postJSON("/api/cubes",{...form,wallKey:props.wallId}).then(()=>{
        router.push({name:"wallOverview",params:{wallId:props.wallId}});
        })

      
    }
    else{
        alert("Form is Empty or Passphrase and passphrase confirmation do not match!")
    }
});
</script>

<style lang="scss" scoped>

</style>
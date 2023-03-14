<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import ImageBig from './ImageBig.vue'

</script>


<template>
    <ImageBig>
         <template #img> <img src="src\assets\Images\PrantlRoppen_Ansprechpartner_Header.jpg"> </template> 
        <template #text>Ansprechpartner.</template>
        <template #subtext></template>
    </ImageBig>
    <ContactForm></ContactForm>
 </template>
 
 
 <style lang="scss" scoped>
   img{
        height: 50vw;
        width: 100% ;
        object-fit: cover;
        object-position: center center;
    }

 </style>
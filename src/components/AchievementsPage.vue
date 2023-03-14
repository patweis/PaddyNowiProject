<script setup lang="ts">
    import ImageBig from './ImageBig.vue'

</script>


<template>
     <ImageBig>
         <template #img> <img src="..\assets\Images\PrantlRoppen_Leistungen_Header.jpg"> </template> 
        <template #text>Weil wir wissen, was wir tun.</template>
        <template #subtext></template>
    </ImageBig>
 </template>
 
 
 <style lang="scss" scoped>
   img{
        height: 50vw;
        width: 100% ;
        object-fit: cover;
        object-position: center center;
    }

 </style>
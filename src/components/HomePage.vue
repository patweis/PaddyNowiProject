<script setup lang="ts">
    import ImageBig from './ImageBig.vue'

</script>


<template>
    <ImageBig>
         <template #img> <img src="../assets/Images/PrantlRoppen_Startseite_Header.jpg"> </template> 
        <template #text>Mit Mensch, Technik und Begeisterung.</template>
        <template #subtext></template>
    </ImageBig>
    <ImageBig>
         <template #img> <img src="../assets/Images/PrantlRoppen_Karriere_Slider1.jpg"> </template> 
        <template #text>Wo Arbeit mehr als ein Job ist.</template>
        <template #subtext> <RouterLink to="/career"> Deine Karriere bei Prantl Roppen - Nur einen Mausklick entfernt.</RouterLink></template>
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
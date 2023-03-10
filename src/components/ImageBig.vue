

<template>
   <div class="container">
      <slot name="img" ></slot>
      <div class="centered">
         <div class="img-text"><slot name="text"></slot></div>
         <div class="img-subtext"><slot name="subtext"></slot></div>
      </div>
   </div>
</template>


<style lang="scss" scoped>
 .container {
  position: relative;
  text-align: center;
  color: white;
  
}
.centered {
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  text-align: center;

}
.img-text{
     font-size: 4vw;
  font-weight: bold !important;
}
.img-subtext{
   font-size: 2vw;
   font-weight: bold !important;
}

</style>
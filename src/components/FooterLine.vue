
<script lang="ts" setup>
  import IconInstagram from './icons/IconInstagram.vue';
  import IconFacebook from './icons/IconFacebook.vue';
</script>

<template>
  <div class="col-md-12 top-footer">
    <div class="col-md-2"></div>
    <div class="col-md-8 links">
      <RouterLink to="/">Start</RouterLink>
      <RouterLink to="/Impressum">Impressum</RouterLink>
      <RouterLink to="/Datasafety">Datenschutz</RouterLink>
      <RouterLink to="/Jobs">Jobs</RouterLink>
      <RouterLink to="/Downloads">Downloads</RouterLink>
    </div>
    <div class="col-md-2 social-media">
        <IconInstagram></IconInstagram>
        <IconFacebook></IconFacebook>
    </div>
  </div>
  <div id="coppyright" class="bottom-footer col-md-12">
      <span>PRANTL ROPPEN | Erd- und Leitungsbau Gmbh | Gewerbepark 33, 6426 Roppen | Tel:<a href="tel:+4354175334">+43 (0) 54175334</a> | Mail:<a href= "mailto:office@erdbau-prantl.at">office@erdbau-prantl.at</a></span> <br>
      <span class="small">Copyright © 2023 | Prantl Roppen </span> 

  </div>
</template>

<style lang="scss" scoped>
 
 
.top-footer {
  background-color: var(--p-dark-red);
  text-align: center;
  .links{
    padding: 2rem 0;
  }
  a{
    color: white;
    margin: 0 2rem;
    font-size: 17px;
 }

}

.bottom-footer {
  background-color: var(--p-dark-gray);
  float:left;
  line-height: 30px;
  padding: 30px 15px;
  text-align: center;
  span, a{
     color:white;
  }
  .small{
    font-size:12px;
  }
}

.social-media{
  color:white;
  padding: 1rem 0;
  svg{
    height: 50px;
    width: 50px;
    fill: currentcolor;
  }
}


</style>
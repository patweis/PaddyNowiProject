
<script lang="ts" setup>
import IconInstagram from './icons/IconInstagram.vue';
import IconFacebook from './icons/IconFacebook.vue';
</script>

<template>
  <div class="col-md-12 top-footer">
    <div class="col-md-2 space"></div>
    <div class="col-md-8 links">
      <div class="col-md-2">
        <RouterLink to="/">Start</RouterLink>
      </div>
      <div class="col-md-2">
        <RouterLink to="/Impressum">Impressum</RouterLink>
      </div>
      <div class="col-md-2">
        <RouterLink to="/Datasafety">Datenschutz</RouterLink>
      </div>
      <div class="col-md-2">
        <RouterLink to="/Jobs">Jobs</RouterLink>
      </div>
      <div class="col-md-2">
        <RouterLink to="/Downloads">Downloads</RouterLink>
      </div>
    </div>
    <div class="col-md-2 social-media">
      <IconInstagram></IconInstagram>
      <IconFacebook></IconFacebook>
    </div>
  </div>
  <div id="coppyright" class="bottom-footer col-md-12">
    <span>PRANTL ROPPEN | Erd- und Leitungsbau Gmbh | Gewerbepark 33, 6426 Roppen | Tel:<a href="tel:+4354175334">+43 (0)
        54175334</a> | Mail:<a href="mailto:office@erdbau-prantl.at">office@erdbau-prantl.at</a></span> <br>
    <span class="small">Copyright © 2023 | Prantl Roppen </span>

  </div>
</template>

<style lang="scss" scoped>
.top-footer {
  background-color: var(--p-dark-red);
  text-align: center;

  .links {
    padding: 3em 0;
    a {
      color: white;
      font-size: 120%;
    }

    .col-md-2 {
      width: 20%;
    }

  }



}

.social-media {
  color: white;
  padding: 2rem 0;

  svg {
    height: 3em;
    width: 3em;
    margin: 0 2%;
    fill: currentcolor;
  }
}

.bottom-footer {
  background-color: var(--p-dark-gray);
  float: left;
  line-height: 2em;
  padding: 1rem;
  text-align: center;

  span,
  a {
    color: white;
  }

  .small {
    font-size: 70%;
  }
}



@media (max-width: 768px) {
  .social-media{
    padding: 1rem 0;
  }

  .space {
    display: none;
  }

  .links {
    width: 83.333%
  }
}</style>
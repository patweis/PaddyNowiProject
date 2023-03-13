<template>
  <nav class="navbar">
    <div class="navbar-brand col-md-6">
      <div>
        <img src="../assets/Logo/brantl_logo.png" alt="Logo">
      </div>
    </div>
    <div class="navbar-dropdown-icon col-md-6">
      <span class="far fa-bars"></span>
    </div>
    <div class="navbar-menu col-md-6">
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/aboutus">Über uns</router-link></div>
      </div>
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/achievements">Leistungen</router-link></div>
        <div class="navbar-item-childs">
          <div class="navbar-child-item noborder"><router-link to="/achievements/earthworks">Erdbau</router-link></div>
          <div class="navbar-child-item"><router-link to="/achievements/construction">Leistungsbau</router-link></div>
          <div class="navbar-child-item"><router-link to="/achievements/blasting">Sprengarbeiten</router-link></div>
          <div class="navbar-child-item"><router-link to="/achievements/recycling">Baustoffrecycling</router-link></div>
          <div class="navbar-child-item"><router-link to="/achievements/fleet">Fuhrpark</router-link></div>
        </div>
      </div>
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/projects">Projekte</router-link></div>
      </div>
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/career">Karriere</router-link></div>
      </div>
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/contact">Kontakt</router-link></div>
      </div>
      <div class="navbar-item col-md-2">
        <div class="navbar-item-header"><router-link to="/downloads">Downloads</router-link></div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .navbar-menu {
    display: none !important;
  }

  .navbar {
    position: relative !important;
    display: block !important;
  }

  nav {
    width: 100%;
  }
}

a {
  color: var(--p-dark-gray);
  font-weight: bold;
}

a:hover {
  color: var(--p-dark-red);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
}

.navbar-brand {
  display: block;
  float: left;
  img {
    height: 7.0em;
    padding: 0.2em;
  }
}
.navbar-menu{
  padding: 2em 0;
}

.navbar-item {
  a{
    font-size: 110%;
  }
  &:hover {
    .navbar-item-header a {
      color: var(--p-dark-red);
      font-size: 115%;
    }

    .navbar-item-childs {
      display: block !important;

    }
  }
}

.navbar-item-childs {
  display: none;
  position: fixed;
  min-width: 8.33333%;
  transition: transform 1s;
  padding: 0 20px;
  margin-left: -20px;
  background-color: var(--p-dark-red);
  border-radius: 3px;
}

.navbar-child-item {
  width: 100%;
  text-align: left;
  padding: 10px;
  border-top: 1px solid white;

  a {
    color: white;
  }

  &:hover {
    a {
      color: var(--p-light-gray);
    }
  }
}

.navbar-item-header {
  height: 3rem;
  width: 100%;
  text-align: center;
  background-color: white;
  padding: 10px;
}

.noborder {
  border: none;
}</style>
<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/search">Buscar Restaurante</router-link> |
    <router-link to="/new">Crear Nuevo Restaurante</router-link>
  </nav>
  <router-view/>
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

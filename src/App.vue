<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container justify-content-center">
      <div class="btn-group" role="group">
        <router-link class="btn btn-success" to="/">Inicio</router-link>
        <router-link class="btn btn-success" to="/search">Buscar Restaurante</router-link>
        <router-link class="btn btn-success" to="/new">Crear Nuevo Restaurante</router-link>
      </div>    
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss" scoped>
.menu {
  margin-top:20px;
}
</style>
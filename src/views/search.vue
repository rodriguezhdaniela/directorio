<template>
  <div class="container">
    <h1 class="pt-4 pb-4">Buscar Restaurante</h1>

    <div class="mb-3">
      <label for="name" class="form-label">Escribe el nombre</label>
      <input type="text" class="form-control" id="name" placeholder="name">
      
    </div>
    <button type="submit" class="btn btn-primary">Buscar</button>

    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top"  src="https://www.lacasona-restaurante.com/wp-content/uploads/2019/02/MIRADOR-DE-NOCHE.jpg" alt="restaurant" style="height:225px; width: 100%; display: block;"/>
          <div class="card-body">
            <p class="card-text">Restaurante Dante</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Cll 48 n78 56</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
}
</script>

<style lang="scss" scoped>

</style>
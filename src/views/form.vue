<template>
    <div class="container">
        <h1 class="pt-4 pb-4">Nuevo Restaurante</h1>
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Descripcion</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Direccion</label>
            <input type="text" class="form-control" id="address" placeholder="address">
        </div>
        <div class="mb-3">
            <label for="imageUrl" class="form-label">Imagen Url</label>
            <input type="text" class="form-control" id="imageUrl" placeholder="image url">
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
    </div>
</template>

<script>
export default {
  name: 'form',
}
</script>

<style>

</style>
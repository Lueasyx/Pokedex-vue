
<template>
  <div class="d-flex justify-content-center" style="flex-direction: column; align-items: center;">
    <h1>Sobre os pokemons</h1> 
    <br>
    <h1>{{ this.pokemon }}</h1>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: null,
      imageUrl: null,
      id: null
    };
  },
  mounted() {
    this.pokemon = this.$route.params.Pokemon;
    this.id = this.$route.params.Id
    this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
  }
};
</script>

<style>
h1 {
  color: white;
}
</style>

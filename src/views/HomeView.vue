<script setup>
import { onMounted, reactive, ref } from 'vue';
import PokemonsList from '../components/PokemonsList.vue'
import axios from 'axios';
let pokemons = reactive(ref())

onMounted(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0").then(res => {
    pokemons.value = res.data.results
  })
})

</script>

<template>
  <main class="bg-dark d-flex">
    <div class="row" id="content">
      <PokemonsList v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name" :url="pokemon.url"/>
    </div>
  </main>
</template>
<style>
  #content {
    justify-content: space-evenly;
    width: 80rem;
    position: sticky;
    left: 7rem;
  }
</style>
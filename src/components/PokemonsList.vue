<script setup>
import { onMounted, ref, defineProps } from 'vue';
import axios from 'axios';

const pokemon = defineProps(["name", "url"]);
const id = pokemon.url.split('/')[6];

function FormatId(id) {
  if (id >= 0 && id <= 9) {
    return `00${id}`
  } else if (id >= 10 && id <= 99) {
    return `0${id}`
  } else {
    return id
  }
}

const text = ref(null);
const pokeId = ref(null);
const types =  ref([])

const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;


onMounted(async () => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`).then((res) => {
    text.value = res.data.flavor_text_entries[1].flavor_text;
    pokeId.value = res.data.pokedex_numbers[0].entry_number;
  });

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((res) => {
    res.data.types.forEach(type => {
      const imgtype = `https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type.type.name}.png`
      types.value.push(imgtype)
    });
  })
});


</script>

<template>
  <div class="card d-flex align-items-center" style="width: 17rem; margin: 1rem;">
    <img :src="imageUrl" class="card-img-top" style="width: 230px; height: 230px; margin-top: 2rem;" :alt="pokemon.name">
    <div class="card-body d-flex align-items-start justify-content-end" style="flex-direction: column;">
      <div class="d-flex justify-content-between align-items-center" style="width: 100%">
        <div>
          <h5 class="card-title">{{ pokemon.name }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Nº {{ FormatId(id) }}</h6>
        </div>
        <div class="d-flex flex-column" style="gap: 3px;">
          <p class="d-flex m-0 justify-content-center" >Tipos:</p>
          <div class="d-flex" style="gap: 0.5em;">
            <img v-for="item in types" :key="item" :src="item" class="card-img-top" style="width: 40px; height: 40px;">
          </div>
        </div>
      </div>
      <p class="card-text" v-if="text">{{ text }}</p>
      <p class="card-text" v-else>Loading...</p>
      <router-link :to="{name: 'Sobre', params: {Pokemon: pokemon.name, Id: id}}" class="btn btn-primary">mais Informações</router-link>
    </div>
  </div>
</template>

<style>
</style>
<template>
  <!--  <div class="card d-flex align-items-center" style="width: 17rem; margin: 1rem;">-->
  <!--    <img :src="imageUrl" class="card-img-top" style="width: 230px; height: 230px; margin-top: 2rem;" :alt="pokemon.name">-->
  <!--    <div class="card-body d-flex align-items-start justify-content-end" style="flex-direction: column;">-->
  <!--      <div class="d-flex justify-content-between align-items-center" style="width: 100%">-->
  <!--        <div>-->
  <!--          <h5 class="card-title">{{ this.pokemon.name }}</h5>-->
  <!--          <h6 class="card-subtitle mb-2 text-body-secondary">Nº {{ FormatId(id) }}</h6>-->
  <!--        </div>-->
  <!--        <div class="d-flex flex-column" style="gap: 3px;">-->
  <!--          <p class="d-flex m-0 justify-content-center" >Tipos:</p>-->
  <!--          <div class="d-flex" style="gap: 0.5em;">-->
  <!--            <img v-for="item in types" :key="item" :src="item" class="card-img-top" style="width: 40px; height: 40px;">-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <p class="card-text" v-if="text">{{ text }}</p>-->
  <!--      <p class="card-text" v-else>Loading...</p>-->
  <!--      <router-link :to="{name: 'Sobre', params: {Pokemon: pokemon.name, Id: id}}" class="btn btn-primary">mais Informações</router-link>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import axios from 'axios';

export default {
  functional: true,
  props: {
    name: String,
    url: String,
    formatId: Function
  },
  data() {
    return {
      id: null,
      imageUrl: null,
      text: null,
      pokeId: null,
    };
  },
  methods: {
    defineImage() {
      this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
    },
    async getPokeInfos() {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.name}`;

      await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.name}`).then((res) => {
        console.log(res.data);
        // this.text = res.data.flavor_text_entries[1].flavor_text;
        // this.pokeId = res.data.id;
      })
    }
  },
  mounted() {
    this.id = this.formatId(this.url);
    this.defineImage();
    console.log(this.name); // Acessando props.name diretamente
  },
  setup(props) {
    console.log(props.name, props.url);
    this.getPokeInfos(); // Chamando getPokeInfos sem argumentos
  },
}
</script>


// const text = ref(null);
// const pokeId = ref(null);
// const types =  ref([])
//
// const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
//
//
// onMounted(async () => {
//   await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`).then((res) => {
//     text.value = res.data.flavor_text_entries[1].flavor_text;
//     pokeId.value = res.data.pokedex_numbers[0].entry_number;
//   });
//
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((res) => {
//     res.data.types.forEach(type => {
//       const imgtype = `https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type.type.name}.png`
//       types.value.push(imgtype)
//     });
//   })
// });


<style>
</style>
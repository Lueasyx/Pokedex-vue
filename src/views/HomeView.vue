<template>
  <main class="bg-dark d-flex" style="width: 100%; height: 100%;">
    <div class="d-flex mt-3 me-3 justify-content-end flex-column">
      <div class="d-flex justify-content-end">
        <select @change='confirm()' class="form-select" v-model="Tipo" name="Tipos" id="Tipos" style="width: 20rem">
          <option selected>Open this select menu</option>
          <option value="normal">Normal</option>
          <option value="fighting">Lutador</option>
          <option value="flying">Voador</option>
          <option value="poison">Venenoso</option>
          <option value="ground">Chão</option>
          <option value="rock">Pedra</option>
          <option value="bug">Inseto</option>
          <option value="ghost">Fantasma</option>
          <option value="steel">Metal</option>
          <option value="fire">Fada</option>
          <option value="water">Água</option>
          <option value="grass">Grama</option>
          <option value="electric">Elétrico</option>
          <option value="psychic">Psíquico</option>
          <option value="ice">Gelo</option>
          <option value="dragon">Dragão</option>
          <option value="dark">Sombrio</option>
          <option value="fairy">Fada</option>
        </select>
      </div>
      <div class="row" id="content" style="width: 100%">
        <PokemonsList
            v-for="pokemon in Pokemons"
            :key="pokemon.name"
            :name="pokemon.name"
            :url="pokemon.url"
            :formatId="FormatId"
        />
      </div>
    </div>
  </main>
</template>
<script>

import axios from 'axios';
import PokemonsList from "@/components/PokemonsList.vue";
import data from "bootstrap/js/src/dom/data";
export default {
  components: {PokemonsList},
  data() {
    return {
      Pokemons: null,
      Tipo: null,
    };
  },
  methods: {
    getPokemons() {
      // if (this.Pokemons === null) {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0").then((res) => {
          this.Pokemons = res.data.results
          console.log(this.Pokemons)
        })
      // } else {
      //   axios.get(`https://pokeapi.co/api/v2/type/${this.Tipo}`).then((res) => {
      //     this.Pokemons = res.data.pokemon
      //     console.log(this.Pokemons)
      //   })
      // }
    },
    confirm() {
      console.log(this.Tipo)
    },
    FormatId(args) {
      const primeId = args.split('/')[6];
      let formattedId;

      if (primeId >= 0 && primeId <= 9) {
        formattedId = `00${primeId}`;
      } else if (primeId >= 10 && primeId <= 99) {
        formattedId = `0${primeId}`;
      } else {
        formattedId = primeId;
      }
      return {"formattedId": formattedId, "pureId": primeId}; // Retorna o valor formatado
    }
  },
  mounted() {
    this.getPokemons();
  },
  watch: {
    Tipo(){
      this.getPokemons();
    }
  }
};
</script>
<style>
  #content {
    justify-content: space-evenly;
    width: 80rem;
    position: sticky;
    left: 7rem;
  }
</style>
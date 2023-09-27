<script setup>
  import { ref } from 'vue';
</script>

<template>
  <nav>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Pokedex</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="main bg-dark">
    <router-view></router-view>
  </div>
</template>
<style>
</style>
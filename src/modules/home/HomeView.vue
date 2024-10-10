<template>
  <section class="home">
    <main class="home-content">
      <img class="home-content__image" src="../../assets/Logo.svg" alt="The Name Game" />
      <p class="home-content__info">Try matching the WillowTree employee to their photo.</p>
      <RouterLink class="home-content__button" to="/match">Play!</RouterLink>
    </main>
  </section>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './HomeView.scss';
</style>

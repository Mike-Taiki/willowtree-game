<template>
  <main class="wrapper">
    <img class="wrapper__image" src="../../../assets/Logo.svg" alt="The Name Game" />
    <p class="wrapper__info">Try matching the WillowTree employee to their photo.</p>
    <RouterLink class="wrapper__button" to="/match">Play!</RouterLink>
  </main>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrapper {
  background-color: $bg-dark-blue;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
  gap: 20px;

  &__image {
    max-width: 100%;
  }

  &__info {
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  &__button {
    background-color: $bg-light-blue;
    border: none;
    color: $bg-white;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 700;
    padding: 12px 100px;
    text-decoration: none;
  }
}
</style>

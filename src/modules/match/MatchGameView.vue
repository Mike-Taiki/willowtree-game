<template>
  <div class="game">
    <Header></Header>
    <main class="game-content">
      <p class="game-content__info">Try matching the WillowTree employee to their photo.</p>
      <h2 class="game-content__heading">Erika Cober</h2>
      <section class="game-content-photos">
        <div class="game-content-photos__item"></div>
        <div class="game-content-photos__item"></div>
        <div class="game-content-photos__item"></div>
        <div class="game-content-photos__item"></div>
        <div class="game-content-photos__item"></div>
        <div class="game-content-photos__item"></div>
      </section>
    </main>
  </div>
</template>
<script lang="ts" setup>
import Header from '@/shared/components/HeaderComponent.vue'
import { onMounted } from 'vue'
import { getProfiles } from './services'

onMounted(async () => {
  const data = await getProfiles()
  console.log('data: ', data.data)
})
</script>
<style lang="scss" scoped>
@import './MatchGameView.scss';
</style>

<template>
  <Header></Header>
  <main class="game">
    <p class="game__info">Try matching the WillowTree employee to their photo.</p>
    <h2 class="game__heading">Erika Cober</h2>
  </main>
</template>
<script lang="ts" setup>
import Header from '@/shared/components/Header.vue'
import { onMounted } from 'vue'
import { getProfiles } from '../home/services'

onMounted(async () => {
  const data = await getProfiles()
  console.log('data: ', data.data)
})
</script>
<style lang="scss" scoped>
@import './MatchGame.scss';
</style>

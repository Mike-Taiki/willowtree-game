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
import { onMounted, ref, type Ref } from 'vue'
import { getProfiles } from './services'
import type { Profile } from './types'

const randomProfiles: Ref<Profile[]> = ref([])
const profile: Ref<Profile | null> = ref(null)

onMounted(async () => {
  const data = await getProfiles()
  randomProfiles.value = getRandomProfile(data.data)
  profile.value = getAnswer(randomProfiles.value)
})

function getRandomProfile(data: Profile[]): Profile[] {
  const length = data.length - 6
  const random = Math.floor(Math.random() * length)

  return data.slice(random, random + 6)
}

function getAnswer(data: Profile[]): Profile {
  const random = Math.floor(Math.random() * 6)

  return data.slice(random, random + 1)[0]
}
</script>
<style lang="scss" scoped>
@import './MatchGameView.scss';
</style>

<template>
  <Header></Header>
  <main class="wrapper">
    <p class="wrapper__info">Try matching the WillowTree employee to their photo.</p>
    <h2 class="wrapper__heading">Erika Cober</h2>
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
@import './Match.scss';
</style>

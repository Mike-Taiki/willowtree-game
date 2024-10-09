<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { getProfiles } from '../services'

defineProps<{
  msg: string
}>()

onMounted(async () => {
  const data = await getProfiles()
  console.log('data: ', data.data)
})
</script>

<style scoped></style>

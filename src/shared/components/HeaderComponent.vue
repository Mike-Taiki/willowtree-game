<template>
  <header class="header">
    <nav class="header__nav">
      <i class="header__nav-icon" @click="goBack"></i>
      <div class="header__nav-title">
        <img class="header__nav-img" src="../../assets/Title.svg" alt="The Name Game" />
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import router from '@/router'

function goBack() {
  router.push({ name: 'home' })
}
</script>
<style scoped lang="scss">
@import './HeaderComponent.scss';
</style>

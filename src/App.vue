<template>

 <div :class="{ 'blur-sm pointer-events-none select-none': isOpen }">
  <LoginPage />
  <Footer></Footer>
  <router-view></router-view>
</div>

</template>

<script setup>
import LoginPage from './components/LoginPage.vue'
import Footer from './components/Footer.vue'
</script>
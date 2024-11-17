


<template>
  <v-app>
    <v-main class="custom-main">
      
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import './assets/main.css';
</script>

<style scoped>
.custom-main {
  /* Remove the excessive padding */
  padding-left: 0; /* or adjust as needed */
  display: flex;
  justify-content: center;
  align-items: center; 
  min-height: 100%; 
}
</style>
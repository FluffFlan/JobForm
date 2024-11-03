


<template>
  <v-app>
    <v-main class="custom-main">
      <TextBox />
    </v-main>
  </v-app>
</template>

<script setup>
import './assets/main.css';
import TextBox from './components/TextBox.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
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
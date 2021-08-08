<template>
  <div id="app" :class="IsDark ? 'dark' : 'light'" >
    <main class="h-screen bg-very-light-grayish-blue dark:bg-very-dark-blue" >
      <main-page  :IsDark="IsDark"/>
    </main>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  computed:{
    IsDark(){
      return this.$store.state.IsDark
    }
  },
  components: {
    MainPage
  },
}
</script>

<style>
#app {
  font-family: Josefin;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Josefin";
  src: local("Josefin"),
   url(./fonts/font.ttf) format("truetype");
}
</style>

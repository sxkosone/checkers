<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Game from './components/Game.vue';
// ... since we have vue-router setup here, and we associate the URL /checkers-vue
//     with the Game.vue component within ./src/router/index.js, we don't need to explicitly import the
//     Game.vue component.
//     It's implied through the router that <router-view/> will import the Game.vue component at the given path.
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

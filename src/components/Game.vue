<template>
  <div class="game">
    <h1>{{ msg }}</h1>
    <RegisterPlayers></RegisterPlayers>
  </div>
</template>

<script>
// import chipsState from './../../data/chips_state.json'
// console.log('chipsState', chipsState)
import RegisterPlayers from './RegisterPlayers.vue'
console.log(RegisterPlayers)

export default {
  name: 'Checkers',
  components: {
    RegisterPlayers
  },
  data () {
    return {
      msg: 'Welcome to Vue Checkers'
    }
  }
}
</script>

<template>
  <div class="game">
    <h1>{{ msg }}</h1>
    <RegisterPlayers></RegisterPlayers>
    <Board></Board>
  </div>
</template>

<script>
// import chipsState from './../../data/chips_state.json'
// console.log('chipsState', chipsState)

import RegisterPlayers from './RegisterPlayers.vue'
import Board from './Board.vue'
console.log(RegisterPlayers)

export default {
  name: 'Checkers',
  components: {
    RegisterPlayers,
    Board
  },
  data () {
    return {
      msg: 'Welcome to Vue Checkers'
    }
  }
}
</script>

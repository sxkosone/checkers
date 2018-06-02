<template>
  <div v-if="gameStats.gameStart">
    <h2>{{ msg }}</h2>
    
  </div>
</template>

<script>
import gameStats from './../../data/gameStats.json'
import gameSquares from './../../data/gameSquares.json'

export default {
  name: 'Board',
  data () {
    return {
      msg: 'This is the Board!',
      gameStats: gameStats,
      gameSquares: gameSquares
    }
  }
}
</script>

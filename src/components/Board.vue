<template>
  <div v-if="gameStats.gameStart">
    <h2>{{ msg }}</h2>
    <div class="wrapper">
      <div v-for="(row, index) in gameSquares" :key="index" class="row">
        <p>{{ index }}</p>
        <div v-for="square in row" :key="square.id" :class="square.classes">
          <p>{{ square.id }}</p>
        </div>
      </div>
    </div>
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

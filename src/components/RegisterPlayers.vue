<template>
  <div class="register-players" v-if="!gameStats.gameStart">
    <form>
      <div class="fieldset-wrap">
        <fieldset>
          <legend>Player One</legend>
          <label>Name: <input v-model="playerOne.name" /></label>
        </fieldset>
        <fieldset>
          <legend>Player Two</legend>
          <label>Name: <input v-model="playerTwo.name" /></label>
        </fieldset>
      </div>
      <div v-if="playerOne.name && playerTwo.name">
        <button @click="gameStats.gameStart = true">Let's Play!</button>
      </div>
    </form>
  </div>
</template>

<script>
import playerOne from './../../data/player1.json'
import playerTwo from './../../data/player2.json'
import gameStats from './../../data/gameStats.json'

// console.log('playerOne', playerOne)
// console.log('playerTwo', playerTwo)
console.log('gameStats', gameStats)
export default {
  name: 'RegisterPlayers',
  data () {
    return {
      playerOne: playerOne,
      playerTwo: playerTwo,
      gameStats: gameStats
    }
  }
}
</script>

<style>
  .fieldset-wrap {
    display: flex;
    justify-content: space-around;
  }
  fieldset {
    display: inline-flex;
    border: 1px solid #cccccc;
    flex-grow: 1;
    padding-top: 0.8em;
    padding-bottom: 1em;
  }
  legend {
    font-weight: bold;
  }
  label, input {
    display: inline;
    font-size: 0.85em;
  }
  button {
    margin: 1em;
    padding: 1em;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
  }
</style>

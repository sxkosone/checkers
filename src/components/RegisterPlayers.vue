<template>
  <div class="register-players">
    <form>
      <fieldset>
        <legend>Player One</legend>
        <label>Name: <input v-model="playerOne.name" /></label>
      </fieldset>
      <fieldset>
        <legend>Player Two</legend>
        <label>Name: <input v-model="playerTwo.name" /></label>
      </fieldset>
      <div v-if="playerOne.name && playerTwo.name">
        <button>Let's Play!</button>
      </div>
    </form>
  </div>
</template>

<script>
import playerOne from './../../data/player1.json'
import playerTwo from './../../data/player2.json'

console.log('playerOne', playerOne)
console.log('playerTwo', playerTwo)
export default {
  name: 'RegisterPlayers',
  data () {
    return {
      playerOne: playerOne,
      playerTwo: playerTwo
    }
  }
}
</script>

<style>
  fieldset {
    display: inline-flex;
    border: 1px solid #cccccc;
  }
  legend {
    font-weight: bold;
  }
  label, input {
    display: inline;
  }
  button {
    margin: 1em;
    padding: 1em;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
  }
</style>

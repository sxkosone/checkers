<template>
  <div class="register-players">
    <form>
      <label>What's your name, Player One?</label>
      <input v-model="playerOne.name" />
      <br /><br /><hr /><br />
      <label>What's your name, Player Two?</label>
      <input v-model="playerTwo.name" />
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

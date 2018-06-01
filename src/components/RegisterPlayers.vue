<template>
  <div class="register-players">
    <form>
      <label>What's your name, Player One?</label>
      <input
        v-bind:value="playerOne.name"
        @change="playerOne.update" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPlayers',
  data () {
    return {
      playerOne: {
        name: 'Michele',
        update: (e) => { console.log(e.target.value) }
      }
    }
  }
}
</script>

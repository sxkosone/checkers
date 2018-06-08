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

/* Box-sizing border-box */
* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

.wrapper {
  padding: 20px;
  margin: 0 auto;
}
/*Row as flex-container*/
.row {
  padding: 0;
  margin: 0;
  display: flex;
}

/*Default styles for all squares to be square shape accross different widths*/
/*Square is both a flex item and a flex container*/
.square {
  flex: 1 0 0px;
  height: auto;
  display: flex;
}

/*Pseudo element to make square height responsive to width*/
.square:before {
  content:'';
  float:left;
  padding-top:100%;
}

/*Red and black squares*/
.red-square { background: red; }
.black-square { background: black; }

/*styling for selected square while testing and developing*/
.square.selected {
  box-shadow: inset 1px 1px 50px springgreen;
}

/*Red and black chips. Chip is the flex item for square*/
.chip {
  flex: 1 1 0px;
  border-radius: 100%;
  margin: 5px;
  align-content: center;
}
/* make the non-captured chips appear clickable to the user */
.chip:not([isCaptured]) {
  cursor: pointer;
}
.chip.selected {
  box-shadow: 0px 0px 5px 5px lightyellow;
  /*animation for selected chips start-state*/
  transition: transform 0.8s ease-out;
}
/*Animate selected chips that are clicked again*/
.chip.moveNE {
  transform: translate(118.5%, -118.5%);
}

.red {
  background: linear-gradient(#ff3535, #8e0101) ;
  border: 1px solid black;

}
.black {
  background: linear-gradient(black, #595959) ;
  border: 1px solid grey;
}

/*Max width for desktop screens only*/
@media all and (min-width: 696px) {
  .wrapper {
    max-width: 660px;
  }
}

</style>

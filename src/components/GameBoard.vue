<template>
  <div id="board">
    <div class="row" v-bind:key="rows" v-for="row in rows">
      <div class="box" v-bind:key="key" :id="row.squares"></div>
    </div>
  </div>
</template>

<script>
 new Vue({
   el: '#board',
   data: {
     rows: [
      { squares: [
        'a8',
        'b8',
        'c8',
        'd8',
        'e8',
        'f8',
        'g8',
        'h8'
      ] },
      { squares: [
        'a7',
        'b7',
        'c7',
        'd7',
        'e7',
        'f7',
        'g7',
        'h7'
      ] },
      { squares: [
        'a6',
        'b6',
        'c6',
        'd6',
        'e6',
        'f6',
        'g6',
        'h6'
      ] },
      { squares: [
        'a5',
        'b5',
        'c5',
        'd5',
        'e5',
        'f5',
        'g5',
        'h5'
      ] },
      { squares: [
        'a4',
        'b4',
        'c4',
        'd4',
        'e4',
        'f4',
        'g4',
        'h4'
      ] },
      { squares: [
        'a3',
        'b3',
        'c3',
        'd3',
        'e3',
        'f3',
        'g3',
        'h3'
      ] },
      { squares: [
        'a2',
        'b2',
        'c2',
        'd2',
        'e2',
        'f2',
        'g2',
        'h2'
        ] },
      { squares: [
        'a1',
        'b1',
        'c1',
        'd1',
        'e1',
        'f1',
        'g1',
        'h1'
      ] }
     ]
       
   }
 })
</script>
<template>
  <div class="home">
    <PlayStep1 v-if="this.showPlayBtn" @playBtnClicked="playBtnClicked"></PlayStep1>
    <PlayStep2 v-if="this.showPlyrs" @startGameBtnClicked="startGameBtnClicked"></PlayStep2>
    <Game v-if="showGame"></Game>
  </div>
</template>

<script>
import Game from "@/components/Game.vue";
import PlayStep1 from "@/components/PlayStep1.vue";
import PlayStep2 from "@/components/PlayStep2.vue";
import {mapState, mapMutations} from 'vuex'

export default {
  name: "home",
  components: {
    Game,
    PlayStep1,
    PlayStep2
  },
  data() {
    return{
      showPlayBtn: true,
      showPlyrs: false,
      showGame: false
    }
  },
  methods: {
    ...mapMutations([ 'assignPlayer1', 'assignPlayer2' ]),
    playBtnClicked(){
      this.showPlayBtn = false;
      this.showPlyrs = true;
    },
    startGame(){
      if(this.gameStatus){
        this.showPlyrs = false;
        this.showGame = true;
        return this.showGame;
    }
    },
    startGameBtnClicked(){
      this.showPlyrs = false;
      this.showGame = true;
      return this.showGame
    }
  },
  computed: {
    ...mapState(['gameStatus'])
    }
};
</script>

<style scoped>

</style>


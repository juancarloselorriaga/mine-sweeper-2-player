<template>
  <div class="score">
    <TotalCount :pending-mines="checkPendingMines" :who-is-winning="whoIsWinning"></TotalCount>

    <Player
      v-for="(player, index) in players"
      :toggler="playerToggle"
      :next="next"
      :key="index"
      :index="index"
      :player="player"
      :player-found-mines="player.mineCount"
      :found-mines="foundMines"
    ></Player>
  </div>
</template>

<script>
import TotalCount from "@/components/TotalCount.vue";
import Player from "@/components/Player.vue";

export default {
  name: "Score",
  components: {
    TotalCount,
    Player
  },
  props: {
    foundMines: Number,
    next: Boolean
  },
  data() {
    return {
      totalMines: 50, //Arreglar hardcodeo con props
      pendingMines: 50, //Arreglar hardcodeo con props
      players: [
        {
          name: "Juan Carlos", //HARDCODED
          isActive: false,
          background: "firstPlayer",
          mineCount: 0
        },
        {
          name: "Jugador 2", //HARDCODED
          isActive: true,
          background: "secondPlayer",
          mineCount: 0
        }
      ]
    };
  },
  computed: {
    playerToggle() {
      this.players[0].isActive = this.next;
      this.players[1].isActive = !this.next;

      if (this.players[1].isActive) {
        this.$emit("playerTwoActive"); //REVISAR SI ME QUEDO CON ESTO
      }
    },
    checkPendingMines() {
      return this.pendingMines - this.foundMines;
    },
    whoIsWinning() {
      if (this.players[0].mineCount > this.players[1].mineCount) {
        return "player1";
      } else if (this.players[0].mineCount < this.players[1].mineCount) {
        return "player2";
      } else if (this.players[0].mineCount === this.players[1].mineCount) {
        return "draw";
      }
    }
  }
};
</script>

<style>
.score {
  min-height: 64rem;
  min-width: 28.4rem;
  border-right: 0.3rem #24305e solid;
  position: relative;
  z-index: 2;
}
</style>
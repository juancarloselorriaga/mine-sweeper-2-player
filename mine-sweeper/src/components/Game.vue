<template>

  <div>
  <section id="game" class="game">
    <div class="game__menu">
      <div class="game__menu-wrapper">
        <label class="game__menu-item">Restart</label>
        <label class="game__menu-item">Quit</label>
      </div>
    </div>
    <div class="game__wrapper" id="mine-sweeper">
      <Score :found-mines="this.foundMines" :next="this.nextPlayerTrigger" @playerTurn="modalTrigger"></Score>

      <Board @next="togglePlayer" @found="countMines" :found-mines="this.foundMines"></Board>
    </div>
  </section>
  <Next-player-modal v-if="showModal" :activePlayer="this.activePlayer"></Next-player-modal>
  </div>


</template>

<script>
import Board from "@/components/Board.vue";
import Score from "@/components/Score.vue";
import NextPlayerModal from "@/components/NextPlayerModal.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Game",
  components: {
    Board,
    Score,
    NextPlayerModal
  },
  data() {
    return {
      foundMines: 0,
      nextPlayerTrigger: false,
      activePlayer: '',
      showModal: false
    };
  },
  methods: {
    countMines(clicks) {
      if (clicks === 1) {
        this.foundMines++;
      }
    },
    togglePlayer() {
      console.log('next')
      this.nextPlayerTrigger = !this.nextPlayerTrigger;
      return this.nextPlayerTrigger;
    },
    modalTrigger(player) {
      this.showModal = true;
      setTimeout(() => this.showModal = false, 800);

      if(player === 'player1'){
        this.activePlayer = this.p1;
      }
      else if(player === 'player2'){
        this.activePlayer = this.p2;
      }
    }
  },
  computed: {
    ...mapState(["p1", "p2"])
  }
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 0;
}

.game__menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  min-width: 92.4rem;
}

.head__logo {
  width: 30rem;
}

.head__logo-img {
  width: 100%;
}

.game__menu-item {
  margin-left: 3rem;
  font-size: 1.9rem;
  color: #374785;
  transition: 0.2s all ease-in;
}

.game__menu-item:hover {
  margin-left: 3rem;
  font-size: 1.9rem;
  color: #f76c6c;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.game__menu-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.game__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  min-width: 92.4rem;
  border: 0.9rem #24305e solid;
  background-color: #24305e;
  border-radius: 1.1rem;
  -webkit-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>

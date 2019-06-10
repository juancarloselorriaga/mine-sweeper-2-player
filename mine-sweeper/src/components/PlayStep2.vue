<template>
  <div class="container">
    <div class="wrapper">
      <span class="label">Player's 1 name</span>
      <span v-if="p1 !== ''" class="label label--red">{{p1}}</span>
      <input v-if="p1 == ''" type="text" class="input" @keyup.enter="addPlayer1" v-model="player1" autofocus>
      <span v-if="p1 == ''" class="instructions-lbl">Hit enter to assign player</span>
    </div>
    <div class="wrapper">
      <span class="label">Player's 2 name</span>
      <span v-if="p2 !== ''" class="label label--red">{{p2}}</span>
      <input v-if="p2 == ''" type="text" class="input" @keyup.enter="addPlayer2" v-model="player2">
      <span v-if="p2 == ''" class="instructions-lbl">Hit enter to assign player</span>
    </div>



    <div class="label-wrapper">
      <button class="play-btn"
      @click="startGameReq"
      v-if="p1 !== '' && p2 !== '' "
      >Start game</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PlayStep2",
  data() {
    return {
      player1: '',
      player2: ''
    };
  },
  computed: {
    ...mapState(["p1", "p2"])
  },
  methods: {
    ...mapMutations(['assignPlayer1', 'assignPlayer2', 'startGame' ]),
    addPlayer1() {
      if (this.player1) {
        this.assignPlayer1(this.player1);
        this.player1 = "";
      }
    },
    addPlayer2() {
      if (this.player2) {
        this.assignPlayer2(this.player2);
        this.player2 = "";
      }
    },
    startGameReq(){
      this.$emit('startGameBtnClicked')
    }
  }
};
</script>

<style scoped>
h2{
  text-align: start;
  font-size: 3rem;
  color: #24305e;
  font-family: "Now";
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.container {
  height: 80vh;
  width: 90%;
}

.label,
.input {
  font-size: 2rem;
  color: #24305e;
  font-family: "Now";
  font-weight: 400;
  line-height: 1.7;
}

.label {
  display: block;
  width: 45rem;
  text-align: start;
  margin-bottom: 1rem;
}

.label--red {
  color: #f76c6c;
}

.input {
  padding: 1rem 2rem;
  border-radius: 1.1rem;
  border: 0.3rem #24305e solid;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;
}

.input:focus {
  border-color: #f76c6c;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.instructions-lbl {
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  color: rgba(34, 38, 41, 0.5);
  text-align: start;
}

.label-wrapper {
  margin-top: 3rem;
}

.play-btn {
  margin-top: 3rem;
  padding: 1rem 4rem;
  font-weight: bold;
  font-size: 2rem;
  color: #24305e;
  font-family: "Now";
  font-weight: 400;
  line-height: 1.7;
  border-radius: 1.1rem;
  border: 0.3rem #24305e solid;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;
}

.play-btn:hover {
  border: 0.3rem #f76c6c solid;
  color: #f76c6c;
}

.play-btn:active {
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: #24305e;
  color: white;
  border: 0.3rem white solid;
}
</style>

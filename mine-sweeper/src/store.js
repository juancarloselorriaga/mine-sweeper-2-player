import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    p1: '',
    p2: '',
    gameStatus: false,
    lastCellClicks: 0,
    player1Obj: require('../src/assets/red-mine.svg'),
    player2Obj: require('../src/assets/blue-mine.svg')
  },
  mutations: {
    assignPlayer1 (state, player1) {
      return state.p1 = player1;
    },
    assignPlayer2 (state, player2) {
      return state.p2 = player2;
    },
    startGame(state){
      return state.gameStatus = true
    },
    checkClicks(state, clicksReceived){
      return state.lastCellClicks = clicksReceived
    }
  },
  actions: {

  }
})

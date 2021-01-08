import Vue from 'vue'
import Vuex from 'vuex'
import game from './game'
import command from "./command"
import points from "./points"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    game,
    command,
    points
  }
})

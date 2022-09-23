import Vue from 'vue'
import Vuex from 'vuex'
import entriesModule from "@/store/modules/entries.module"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entriesState: entriesModule.state
  },
  getters: {
    getEntriesState (state) {
      return state.entriesState.entriesList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    entriesModule
  }
})

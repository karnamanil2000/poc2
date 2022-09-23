import { EntriesService } from "@/services/EntriesService"

export default {
  namespaced: true,
  state: {
    entriesList: {
      loading: false,
      entries: [],
      errorMessage: null
    }
  },
  mutations: {
    GET_ENTRIES_REQUEST (state) {
      state.entriesList.loading = true
    },
    GET_ENTRIES_SUCCESS (state, payload) {
      state.entriesList.loading = false
      state.entriesList.entries = payload.entries
    },
    GET_ENTRIES_FAILED (state, payload) {
      state.entriesList.loading = false
      state.entriesList.errorMessage = payload.error
    }
  },
  actions: {
    async getEntries ({commit}) {
     try {
      commit("GET_ENTRIES_REQUEST")
      let response = await EntriesService.getAllEntries()
      commit("GET_ENTRIES_SUCCESS", {entries: response.data})
     } catch (error) {
      commit("GET_ENTRIES_FAILED", {error: error})
     } 
    }
  }
}
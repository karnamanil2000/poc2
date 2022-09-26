import { EntriesService } from "@/services/EntriesService"
import router from '../../router'

export default {
  namespaced: true,
  state: {
    entriesList: {
      loading: false,
      entries: [],
      errorMessage: null,
      entry: {},
      apiResponse: {}
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
    },
    CREATE_ENTRIES_REQUEST (state) {
      state.entriesList.loading = true
    },
    CREATE_ENTRIES_SUCCESS (state, payload) {
      state.entriesList.loading = false
      state.entriesList.apiResponse = payload.apiResponse
      return router.push('/')
    },
    CREATE_ENTRIES_FAILED (state, payload) {
      state.entriesList.loading = false
      state.entriesList.errorMessage = payload.error
      return router.push('/entries/add')
    }
  },
  actions: {
    async getEntries ({commit}) {
     try {
      commit("GET_ENTRIES_REQUEST")
      let response = await EntriesService.getAllEntries()
      console.log(response)
      commit("GET_ENTRIES_SUCCESS", {entries: response.data})
     } catch (error) {
      commit("GET_ENTRIES_FAILED", {error: error})
     }
    },
    async createEntry ({commit, state}) {
      try {
        commit("CREATE_ENTRIES_REQUEST")
        let response = await EntriesService.createEntry(state.entriesList.entry)
        commit("CREATE_ENTRIES_SUCCESS", {apiResponse: response.data})
      } catch (error) {
        commit("CREATE_ENTRIES_FAILED", {error: error})
      }
    }
  }
}
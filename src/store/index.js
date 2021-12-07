import { createStore } from 'vuex'
import { LocalStorageNotes } from '../utils/localStorage'

const localStorageNotes = new LocalStorageNotes();

export const store = createStore({
  state () {
    return {
      notes: []
    }
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    loadNotes({commit}) {
      const notes = localStorageNotes.get()
      commit('setNotes', notes)
    },
    addNote({dispatch}, note) {
      localStorageNotes.add(note);
      dispatch('loadNotes')
    },
    removeNote({dispatch}, index) {
      localStorageNotes.remove(index);
      dispatch('loadNotes')
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})

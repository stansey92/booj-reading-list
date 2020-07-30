import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  saveBook(state, newBook) {
    state.savedBooks.push(newBook)
  },
  removeBook(state, bookIndex) {
    state.savedBooks.splice(bookIndex, 1)
  },
  switchBookOrder(state, payload) {
    let books = [...state.savedBooks]
    let { currentBookIndex, newBookIndex } = payload
    let draggedBook = books[currentBookIndex]
    books[currentBookIndex] = books[newBookIndex]
    books[newBookIndex] = draggedBook
    state.savedBooks = books
  },
  sortByTitle(state) {
    state.savedBooks.sort((a,b) => a.volumeInfo.title > b.volumeInfo.title ? 1 : ((a.volumeInfo.title < b.volumeInfo.title) ? -1 : 0 ))
  }
}

export default new Vuex.Store({
  state: {
    savedBooks: []
  },
  mutations: mutations, 
  actions: {
  },
  modules: {
  }
})

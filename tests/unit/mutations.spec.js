import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import { mutations } from '@/store/index.js'
const { saveBook, removeBook, switchBookOrder, sortByTitle } = mutations


// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })




describe('mutations', () => {
  it('adds new book to state', () => {
    const state = {
      savedBooks: []
    }
    const book = {
      title: "Test Book",
      author: "Testy McTesterson"
    }
    saveBook(state, book)
    expect(state.savedBooks.length).to.equal(1)
  })

  it('removes book from state', () => {
    const state = {
      savedBooks: [
        {
          title: "Test Book 1",
          author: "Testy McTesterson"
        },
        {
          title: "Test Book 2",
          author: "Testy McTesterson"
        },
      ]
    }
    removeBook(state, 1)
    expect(state.savedBooks.length).to.equal(1)
  })

  it('switches order of items', () => {
    const state = {
      savedBooks: [
        {
          title: "Test Book 1",
          author: "Testy McTesterson"
        },
        {
          title: "Test Book 2",
          author: "Testy McTesterson"
        },
        {
          title: "Test Book 3",
          author: "Testy McTesterson"
        },
      ]
    }
    const payload = {
        currentBookIndex: 0,
        newBookIndex: 2
    }
    switchBookOrder(state, payload)
    expect(state.savedBooks[0].title).to.equal('Test Book 3')
    expect(state.savedBooks[2].title).to.equal('Test Book 1')
  })

  it('sorts by title asc', () => {
    const state = {
      savedBooks: [
        { 
          volumeInfo: {
            title: 'C'
          },
        },
        { 
          volumeInfo: {
            title: 'A'
          },
        },
        { 
          volumeInfo: {
            title: 'B'
          },
        },
      ]
    }
    sortByTitle(state)
    expect(state.savedBooks[0].volumeInfo.title).to.equal('A')
    expect(state.savedBooks[1].volumeInfo.title).to.equal('B')
    expect(state.savedBooks[2].volumeInfo.title).to.equal('C')
  })
})

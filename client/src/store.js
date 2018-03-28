import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    questions: [],
    answer: []
  },
  getters: {
    getQuestion (state) {
      console.log('ini store get question', state)
      return state.questions
    }
  },
  mutations: {
    showQuestion (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    showQuestion ({commit}, payload) {
      console.log('masuk show quest store')
      // axios({
      //   method: 'get',
      //   url: 'http://localhost:3000/question'
      // }).then(function (response) {
      //   console.log('res quest', response.data)
      //   contex.commit('showQuestion', response.data.data)
      // })
      axios.get('http://localhost:3000/question').then(response => {
        commit('showQuestion', response.data.data)
      })
    }
  }
})

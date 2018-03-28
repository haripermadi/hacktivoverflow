import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: '',
    test: 'halooo'
  },
  getters: {
    getQuestion: function (state) {
      console.log('ini store get question', state)
      return state.questions
    }
  },
  mutations: {
    getQuestion: function (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    getQuestion: function (contex, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/question'
      }).then(function (response) {
        console.log('res quest', response.data)
        contex.commit('getQuestion', response.data)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
})

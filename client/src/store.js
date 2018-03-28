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
    },
    postQuestion (state, payload) {
      state.questions.push(payload)
    }
  },
  actions: {
    showQuestion (contex, payload) {
      console.log('masuk show quest store')
      axios({
        method: 'get',
        url: 'http://localhost:3000/question'
      }).then(function (response) {
        console.log('res quest', response.data)
        contex.commit('showQuestion', response.data.data)
      })
    },
    postQuestion (contex, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/question',
        data: {
          title: payload.title,
          description: payload.description,
          userId: payload.userId
        }
      }).then(response => {
        contex.commit('postQuestion', response)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

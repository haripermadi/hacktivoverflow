import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        id: 7632325,
        username: 'Amama',
        title: 'How to use knife like a pro?',
        description: 'helloo...my name amma, i want to know how to slice apple like elephant?',
        votes: 0,
        answer: []
      },
      {
        id: 2542636,
        username: 'Anak baik',
        title: 'How to eat sushi?',
        description: 'haii..next weeek i went to sushi bar, but i cannot use chopstick, any tips?',
        votes: 0,
        answer: []
      },
      {
        id: 3643636,
        username: 'AnakU45',
        title: 'How to edit image?',
        description: 'i am newbie in photography, my image always blur so is there editing apps can i use?',
        votes: 0,
        answer: []
      }
    ],
    test: 'halooo'
  },
  getters: {
    getQuestion: function (state) {
      console.log('ini store get question', state)
      return state.questions
    }
  },
  mutations: {
  },
  actions: {

  }
})

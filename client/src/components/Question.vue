<template>
  <div class="card offset-md-4">
    <div v-for="(data,i) in questions" :key="i" v-if="data.id == $route.params.id">
      <h5 class="card-header">{{data.title}}</h5>
      <div class="card-body">
        <p class="card-text">{{data.description}}.</p>
      </div>
      <div class="card-footer text-muted">
          asked by: {{data.username}}
      </div>
      <div>
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Question',
  data () {
    return {
      questionData: []
    }
  },
  created: function () {
    this.showQuestion()
  },
  computed: {
    questions: function () {
      console.log('question comp frm this store', this.$store.getters)
      return this.$store.getters.getQuestion
    }
  },
  methods: {
    showQuestion: function () {
      let self = this
      axios({
        method: 'get',
        url: `http://localhost:3000/question`
      }).then(function (response) {
        console.log('respon get article', (response.data.listArticle))
        self.articles = response.data.listArticle
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>

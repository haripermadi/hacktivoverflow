<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">Post Question</button>
      </div>
      <div class="col-md-8">
        <div class="card" v-for="(data, i) in questions" :key="i">
          <router-link :to= "{name: 'Question', params: {id: data._id}}"><h5 class="card-header">{{data.title}}</h5></router-link>
          <div class="card-body">
            <p class="card-text">{{data.description}}</p>
          </div>
          <router-view :data="data"></router-view>
        </div>
      </div>
    </div>
    <!-- Modal add post-->
  <div class="modal fade" id="addPostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Ask Question</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name" class="col-form-label">Question Title:</label>
              <input type="text" class="form-control" v-model="newQuestion.title">
            </div>
            <div class="form-group">
              <label for="description" class="col-form-label">Description: </label>
              <input type="text" class="form-control" v-model="newQuestion.description">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="postQuestion">Post</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newQuestion: {
        title: '',
        description: '',
        userId: '5abbe21eb3658b2b552194f1'
      }
    }
  },
  created: function () {
    this.$store.dispatch('showQuestion')
  },
  computed: {
    questions () {
      console.log('question comp frm this store', this.$store.getters)
      return this.$store.getters.getQuestion
    }
  },
  methods: {
    postQuestion: function (newQuestion) {
      this.$store.dispatch('postQuestion', newQuestion)
    }
  }
}
</script>

<style>

</style>

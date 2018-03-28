<template>
  <div class="card offset-md-4">
    <div v-for="(data,i) in questions" :key="i" v-if="data._id == $route.params.id">
      <h5 class="card-header">{{data.title}}</h5>
      <div class="card-body">
        <p class="card-text">{{data.description}}.</p>
      </div>
      <div class="card-footer text-muted">
          asked by: {{data.userId.name}}
      </div>
    </div>
    <div class="container">
        <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Post An Answer</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      questionData: []
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
  }
}
</script>

<style>

</style>

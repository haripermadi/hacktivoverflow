<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block">Post Question</button>
      </div>
      <div class="col-md-8">
        <div class="card" v-for="(data, i) in questions" :key="i">
          <router-link :to= "{name: 'Question', params: {id: data.id}}"><h5 class="card-header">{{data.title}}</h5></router-link>
          <div class="card-body">
            <p class="card-text">{{data.description}}</p>
          </div>
          <router-view :data="data"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

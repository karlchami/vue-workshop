<template>
  <v-container class="m-5">
    <h1>What is Vue.js?</h1>
    Vue.js is a framework duh
    <div
      class="m-5"
      v-for="x in 50"
    >Content Here</div>
  </v-container>
</template>

<script>
require('@/css/mainPage.css')
require('@/css/transitions.css')
export default {
  name: "introPage",
  components: {},
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  created () {
  },
  destroyed () {
  },
  methods: {

  }
};
</script>

<style scoped>
</style>

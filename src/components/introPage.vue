<template>
  <v-container class="mt-5 ml-5">
    <h1>Welcome to <i class="workshop-title">Vue.js</strong> Workshop</i></h1>
    <div class="mt-1">
      The goal of this workshop is to demonstrate the main concepts behind this framework.<br><br>
      If you are a beginner or an intermediate Vue.js developer, this workshop is for you.<br>
      If you don't know where to start when implementing a feature, or if you endlessly scroll up<br> and down a component file without proper understanding of what to do, this workshop is for you as well.<br>
      <br>You will learn about the following topics<br>
      <ul class="mt-1">
        <li>What is Vue.js</li>
        <li>Structuring Components</li>
        <li>What is inside a Vue Component?</li>
        <ul>
          <li>Template, Script, and Style</li>
          <li>Conditional rendering and DOM</li>
          <li>A deeper look into the Script section</li>
          <ul>
            <li>Local state management</li>
            <li>Methods</li>
            <li>Lifecycle hooks</li>
            <li>Watchers and Computed properties</li>
          </ul>
        </ul>
        <li>Components communication</li>
        <ul>
          <li>Props and Emissions</li>
          <li>VueX Global State Management</li>
        </ul>
        <li>Scalability and Reusability</li>
      </ul>
    </div>
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
.workshop-title {
  font-weight: 900 !important;
}
</style>

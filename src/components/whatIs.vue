<template>
  <v-container class="mt-5 ml-5 mb-10">
    <h1>What is <strong>Vue.js</strong> ?</h1>
    <div class="ml-10 mt-5">
      <div class="mb-1">
        <v-icon color="white">mdi-vuejs</v-icon> Javascript Framework
      </div>
      <div class="mb-2">
        <v-icon color="white">mdi-television-guide</v-icon> Front-End
      </div>
      <div class="mb-2">
        <v-icon color="white">mdi-open-source-initiative</v-icon> Open Source
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-calendar-range</v-icon> First release on February 2014
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-face-man</v-icon> Created by Evan You
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-earth</v-icon> Used by 3,383 global companies
      </div>
    </div>
    <h1 class="mt-8">Why <strong>Vue.js</strong> ?</h1>
    <div class="ml-10 mt-5">
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-resize</v-icon> Lightweight (18–21 kb)
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-speedometer</v-icon> High Performance
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-chart-bell-curve-cumulative</v-icon> Fast learning curve
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-file-document</v-icon> Detailed documentation
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-account-group</v-icon> Community support
      </div>
      <div class="mb-2">
        <v-icon
          class="pb-1"
          color="white"
        >mdi-earth-box</v-icon> Best of both worlds (Angular.js, React.js)
      </div>
      <div>
        <v-icon
          class="pb-1"
          color="white"
        >mdi-video-input-component</v-icon> MVVM Architecture
      </div>
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
strong {
  font-weight: 900 !important;
}
</style>

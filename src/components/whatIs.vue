<template>
  <v-container class="mt-5 ml-5 mb-10">
    <v-row class="justify-center align-center">
      <v-col>
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
      </v-col>
      <v-col
        align="center"
        justify-center
      >
        <div class="box">
          <img
            v-for="p in pics"
            class="logos"
            :src="getImageSrc(p)"
          ></img>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center align-center">
      <v-col>
        <h1>Why <strong>Vue.js</strong> ?</h1>
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
      </v-col>
      <v-col
        align="center"
        justify="center"
      >
        <div>
          <img
            class="mvvm"
            src="@/img/mvvm.svg"
          ></img>
        </div>
      </v-col>
    </v-row>
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
      pics: ['buzzfeed', 'gitlab', 'google', 'nitendo', 'ph', 'zoom']
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
    getImageSrc (img) {
      console.log(img)
      return require(`@/img/${img}.svg`)
    }
  }
};
</script>

<style scoped>
strong {
  font-weight: 900 !important;
}
.box {
  border-radius: 5px;
  width: 300px;
  height: 150px;
  background: rgba(0, 0, 0, 0.084);
  white-space: pre-line;
  position: relative;
}
.logos {
  width: 100px;
}
.mvvm {
  width: 600px;
}
</style>

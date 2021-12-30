<template>
  <div>
    <transition
      name="fade"
      appear
    >
      <MainPage
        v-show="showMain"
        @start="getStarted"
      ></MainPage>
    </transition>
    <transition name="slower-fade">
      <v-container
        v-show="!showMain"
        fluid
        class="container-height menu-container"
      >
        <transition name="slide-fade">
          <v-layout
            v-show="!showMain"
            fill-height
          >
            <v-layout
              align-center
              justify-center
            >
              <v-layout
                align-center
                justify-center
                class="layout-parent"
              >
                <v-btn>left</v-btn>
                <v-container class="align-center card-container">
                  <v-progress-linear
                    color="rgba(0, 0, 0, 0.303)"
                    height="10"
                    value="15"
                  ></v-progress-linear>
                  <v-card
                    height="600"
                    class="d-flex align-center justify-center main-card"
                  >
                    dfdsfsfsdfsdfs
                  </v-card>
                </v-container>
                <v-btn>right</v-btn>
              </v-layout>
            </v-layout>
          </v-layout>
        </transition>
      </v-container>
    </transition>
  </div>
</template>

<script>
require('@/css/mainPage.css')
import MainPage from "@/components/mainPage.vue"
export default {
  name: "Base",
  components: { MainPage },
  data () {
    return {
      showMain: false,
    }
  },
  mounted () {
  },
  computed: {
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
  },
  methods: {
    getStarted () {
      this.showMain = false
    },
    handleScroll () {
      console.log("hiiii")
    }
  }
};
</script>

<style scoped>
</style>

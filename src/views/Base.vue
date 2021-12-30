<template>
  <v-container
    fluid
    class="main-container container-height"
  >
    <v-layout fill-height>
      <transition
        name="fade"
        appear
      >
        <MainPage
          v-show="showMain"
          @start="getStarted"
        ></MainPage>
      </transition>
      <transition name="slide-down-fade">
        <v-layout
          v-show="showMenu"
          align-center
          justify-center
        >
          <v-layout
            align-center
            justify-center
            class="layout-parent"
          >
            <transition name="slide-left-fade">
              <v-btn v-show="showMenu">left</v-btn>
            </transition>
            <v-container class="align-center card-container">
              <transition name="slide-up-fade">
                <v-progress-linear
                  v-show="showMenu"
                  color="rgba(0, 0, 0, 0.303)"
                  height="15"
                  :value="pageValue"
                ></v-progress-linear>
              </transition>
              <v-card
                height="600"
                class="d-flex align-center justify-center main-card"
              >
                dfdsfsfsdfsdfs
              </v-card>
            </v-container>
            <transition name="slide-right-fade">
              <v-btn v-show="showMenu">right</v-btn>
            </transition>
          </v-layout>
        </v-layout>
      </transition>
    </v-layout>
  </v-container>
</template>

<script>
require('@/css/mainPage.css')
import MainPage from "@/components/mainPage.vue"
export default {
  name: "Base",
  components: { MainPage },
  data () {
    return {
      showMain: true,
      showMenu: false,
      showMenuButton: false,
    }
  },
  mounted () {
  },
  computed: {
    pageValue () {
      return 0
    }
  },
  created () {
  },
  destroyed () {
  },
  methods: {
    getStarted () {
      this.showMain = false
      setTimeout(this.activateMenu, 1200);
    },
    activateMenu () {
      this.showMenu = true
    }
  }
};
</script>

<style scoped>
</style>

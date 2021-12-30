<template>
  <v-container
    fluid
    id="main-background"
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
              <v-btn
                v-show="showMenu"
                class="custom-click"
                icon
              >
                <v-icon size="50">mdi-chevron-left-circle</v-icon>
              </v-btn>
            </transition>
            <v-container class="align-center card-container">
              <transition name="slide-right-fade">
                <div
                  v-show="showMenu"
                  align="center"
                  class="pageButtons mb-3"
                >
                  <v-btn
                    v-ripple="false"
                    color="rgba(0, 0, 0, 0.303)"
                    class="white--text custom-click ml-1 mr-1"
                  >Page 1</v-btn>
                  <v-btn
                    v-ripple="false"
                    color="rgba(0, 0, 0, 0.303)"
                    :disabled="true"
                    class="white--text custom-click ml-1 mr-1"
                  >Page 2</v-btn>
                  <v-btn
                    v-ripple="false"
                    color="rgba(0, 0, 0, 0.303)"
                    :disabled="true"
                    class="white--text custom-click ml-1 mr-1"
                  >Page 3</v-btn>
                  <v-btn
                    v-ripple="false"
                    color="rgba(0, 0, 0, 0.303)"
                    :disabled="true"
                    class="white--text custom-click ml-1 mr-1"
                  >Page 4</v-btn>
                </div>
              </transition>
              <transition name="slide-up-fade">
                <v-progress-linear
                  v-show="showMenu"
                  color="rgba(0, 0, 0, 0.303)"
                  height="15"
                  :value="pageValue"
                ></v-progress-linear>
              </transition>
              <v-card
                id="watch-scroll"
                @scroll="scrollActions"
                height="700"
                class="main-card"
              >
                <div
                  class="m-5"
                  align="center"
                  v-for="x in 50"
                >Content Here</div>
              </v-card>
            </v-container>
            <transition name="slide-right-fade">
              <v-btn
                v-show="showMenu"
                class="custom-click"
                icon
              >
                <v-icon size="50">mdi-chevron-right-circle</v-icon>
              </v-btn>
            </transition>
          </v-layout>
        </v-layout>
      </transition>
    </v-layout>
  </v-container>
</template>

<script>
require('@/css/mainPage.css')
require('@/css/transitions.css')
require('@/css/mobile.css')
import MainPage from "@/components/mainPage.vue"
import { pSBC } from "@/helpers/shader"
export default {
  name: "Base",
  components: { MainPage },
  data () {
    return {
      showMain: true,
      showMenu: false,
      pageValue: 0
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
    getStarted () {
      this.showMain = false
      setTimeout(this.activateMenu, 1200);
    },
    activateMenu () {
      this.showMenu = true
    },
    scrollLevel () {
      let div = document.getElementById("watch-scroll")
      let totalScroll = div.scrollHeight
      if (div.scrollTop === 0) {
        return div.scrollTop / totalScroll
      }
      let scrolledTop = div.scrollTop + div.clientHeight
      return scrolledTop / totalScroll
    },
    scrollLevelColor () {
      let div = document.getElementById("watch-scroll")
      let totalScroll = div.scrollHeight
      let scrolledTop = div.scrollTop + div.clientHeight
      return scrolledTop / totalScroll
    },
    scrollActions () {
      let scrollLevel = this.scrollLevel()
      this.pageValue = scrollLevel * 100
      let color1 = pSBC(this.scrollLevelColor(), "#35916c", "#223c5c")
      let color2 = pSBC(this.scrollLevelColor(), "#223c5c", "#35916c")
      let gradientBackground = `linear-gradient(to bottom, ${color1}, ${color2})`
      document.getElementById("main-background").style.backgroundImage = gradientBackground
    }
  }
};
</script>

<style scoped>
#division,
.division {
  background: blue;
  margin: 50px;
  margin-top: 200px;
}
</style>

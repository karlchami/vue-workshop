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
                :disabled="disabledLeft"
                v-show="showMenu"
                class="custom-click"
                @click="setPageIndex(-1)"
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
                    v-for="(b, index) in menuButtons"
                    :key="b.label"
                    v-ripple="false"
                    color="rgba(0, 0, 0, 0.303)"
                    :disabled="b.disabled"
                    @click="clickMenuButton(index)"
                    class="white--text custom-click ml-1 mr-1"
                  >{{ b.label }}</v-btn>
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
                height="710"
                class="main-card no-select"
              >
                <transition :name="pageTransition">
                  <IntroPage v-show="menuButtonsDisabled[0]" />
                </transition>
                <transition :name="pageTransition">
                  <whatIs v-show="menuButtonsDisabled[1]" />
                </transition>
                <transition :name="pageTransition">
                  <component-structure v-show="menuButtonsDisabled[2]" />
                </transition>
              </v-card>
            </v-container>
            <transition name="slide-right-fade">
              <v-btn
                v-show="showMenu"
                :disabled="disabledRight"
                @click="setPageIndex(1)"
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
import IntroPage from "@/components/introPage.vue"
import whatIs from "@/components/whatIs.vue"
import componentStructure from "@/components/componentStructure.vue"
import { pSBC } from "@/helpers/shader"
export default {
  name: "Base",
  components: { MainPage, IntroPage, whatIs, componentStructure },
  data () {
    return {
      showMain: false,
      showMenu: true,
      pageValue: 0,
      menuButtonsDisabled: [true, false, false],
      pageIndex: 0,
      pageTransition: 'slide-custom-l-fade'
    }
  },
  computed: {
    menuButtons: function () {
      return {
        0: {
          label: "Table of Contents",
          disabled: this.menuButtonsDisabled[0]
        },
        1: {
          label: "Introduction",
          disabled: this.menuButtonsDisabled[1]
        },
        2: {
          label: "Component Structure",
          disabled: this.menuButtonsDisabled[2]
        }
      }
    },
    disabledLeft () {
      return this.pageIndex === 0
    },
    disabledRight () {
      return this.pageIndex === this.menuButtonsDisabled.length - 1
    },
  },
  created () {
  },
  watch: {
    pageIndex: {
      handler: function (newValue, oldValue) {
        if (newValue > oldValue) {
          this.pageTransition = 'slide-custom-l-fade'
        }
        else {
          this.pageTransition = 'slide-custom-r-fade'
        }
        let newDisabled = this.menuButtonsDisabled.map((e, index) => {
          return index === newValue
        });
        this.menuButtonsDisabled = newDisabled
        document.getElementById("watch-scroll").scrollTop = 0
      }
    }
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
      console.log(scrolledTop / totalScroll)
      return scrolledTop / totalScroll
    },
    scrollActions () {
      let scrollLevel = this.scrollLevel()
      this.pageValue = scrollLevel * 100
      let color1 = pSBC(this.scrollLevelColor(), "#35916c", "#223c5c")
      let color2 = pSBC(this.scrollLevelColor(), "#223c5c", "#35916c")
      let gradientBackground = `linear-gradient(to bottom, ${color1}, ${color2})`
      document.getElementById("main-background").style.backgroundImage = gradientBackground
    },
    clickMenuButton (index) {
      this.pageIndex = parseInt(index)
    },
    setPageIndex (incrementOrDecrement) {
      this.pageIndex += incrementOrDecrement
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

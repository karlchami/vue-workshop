<template>
  <v-container
    fluid
    class="main-container"
  >
    <transition
      name="fade"
      appear
    >
      <v-layout fill-height>
        <v-container>
          <div align="center">
            <img
              class="mt-12 mb-12"
              width="300"
              src="@/img/vue-logo.svg"
            ></img>
            <div class='console-container mt-10 mb-12'><span id='text'></span>
              <div
                class='console-underscore'
                id='console'
              >&#95;</div>
            </div>
            <ParticleEffectButton
              :visible.sync="btnOps.visible"
              :animating.sync="btnOps.animating"
              :options="btnOps"
              cls="btn-cls mt-12"
            >
              Let's get started!
            </ParticleEffectButton>
            <button @click="btnOps.visible=!btnOps.visible"></button>
          </div>
          </div>
        </v-container>
      </v-layout>
    </transition>
  </v-container>
</template>

<script>
import ParticleEffectButton from "vue-particle-effect-buttons"
import consoleText from "@/helpers/consoleText"
require('@/css/mainPage.css')
export default {
  name: "MainPage",
  components: { ParticleEffectButton },
  data () {
    return {
      typingText: {
        id: "text",
        text: ["Hey you!", "Welcome to my Vue.js tutorial", "Made with love ♡ by Karl-Joey Chami."],
        color: ["white", "white", "#e64c4c"],
      },
      btnOps: {
        type: "circle",
        easing: "easeOutQuart",
        size: 2,
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: function () {
          return Math.random() < 0.5 ? "#2F7968" : "#ffffff";
        },
        onComplete: () => {
          console.log("complete")
        },
        onBegin: () => {
        },
        visible: true,
        animating: false
      },
    }
  },
  mounted () {
    consoleText(this.typingText.text, this.typingText.id, this.typingText.color);
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

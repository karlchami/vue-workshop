<template>
  <v-container
    fluid
    class="main-container"
  >
    <v-layout fill-height>
      <v-container>
        <div align="center">
          <div class='console-container'><span id='text'></span>
            <div
              class='console-underscore'
              id='console'
            >&#95;</div>
          </div>
        </div>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import consoleText from "@/helpers/consoleText"
require('@/css/mainPage.css')
export default {
  name: "MainPage",
  components: {},
  data () {
    return {
      typingText: {
        id: "text",
        text: ["Hey you!", "Welcome to my Vue.js tutorial", "Made with love, by Karl-Joey Chami."],
        color: ["blue", "orange", "tomato"]
      }
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

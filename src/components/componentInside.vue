<template>
  <v-container class="m-5">
    <h1>What's inside a <strong>Vue Component</strong>?</h1>
    <v-row class="mb-5 mt-12">
      <v-col class="bottom-marg">
        <prism-editor
          class="my-editor"
          v-model="code"
          :highlight="highlighter"
          readonly
          line-numbers
        ></prism-editor>
      </v-col>
      <v-col align="center">
        <div
          class="box p-3"
          align="left"
        >
          <div class="m-4">
            <v-icon>mdi-language-html5</v-icon><strong> HTML</strong>
          </div>
          <v-btn class="ml-8">Click me</v-btn>
          <v-divider></v-divider>
          <div class="m-4">
            <v-icon>mdi-language-html5</v-icon><strong> HTML</strong> + <v-icon>mdi-language-javascript</v-icon><strong> Javascript</strong>
          </div>
          <v-row>
            <v-col>
              <v-btn
                class="ml-8"
                @click="buttonClick1()"
              >Click me</v-btn>
            </v-col>
            <v-col>
              <strong v-show="showText1">Hello</strong>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <div class="m-4">
            <v-icon>mdi-language-html5</v-icon><strong> HTML</strong> + <v-icon>mdi-language-javascript</v-icon><strong> Javascript</strong> + <v-icon>mdi-language-css3</v-icon><strong> CSS</strong>
          </div>
          <v-row>
            <v-col>
              <v-btn
                color="green"
                dark
                class="ml-8"
                @click="buttonClick2()"
              >Click me</v-btn>
            </v-col>
            <v-col>
              <strong v-show="showText2">Hello</strong>
            </v-col>
          </v-row>

        </div>
        </div>
      </v-col>
    </v-row>
    <br><br>
    <v-row>
      <v-col>
        <div>
          <h2><strong>&lttemplate&gt</strong></h2>
          <div class="mt-5 ml-5">Content</div>
        </div>
        <br><br>
        <div>
          <h2><strong>&ltscript&gt</strong></h2>
          <div class="mt-5 ml-5">Content</div>
        </div>
        <br><br>
        <div>
          <h2><strong>&ltstyle&gt</strong></h2>
          <div class="mt-5 ml-5">Content</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
require('@/css/mainPage.css')
require('@/css/transitions.css')
export default {
  name: "introPage",
  components: { PrismEditor },
  data () {
    return {
      showText1: false,
      showText2: false,
      code: '<template>\n    <v-btn class="button1" @click="doSomething()">\n        Click me\n    </v-btn>\n</template>\n\n\<script\>\n    ...\n    doSomething(){\n        console.log("Button Clicked");\n        this.showText = !this.showText;\n    }\n    ...\n<\/script\>\n\n<style scoped>\n    .button1 {\n        color: white;\n        background-color: green;\n    }\n</style>'
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
    highlighter (code) {
      return highlight(code, languages.js);
    },
    buttonClick1 () {
      console.log("Button Clicked")
      this.showText1 = !this.showText1
    },
    buttonClick2 () {
      console.log("Button Clicked")
      this.showText2 = !this.showText2
    }
  }
};
</script>

<style scoped>
strong {
  font-weight: 900 !important;
}
.comp-img {
  width: 600px;
  image-rendering: pixelated;
  image-rendering: -webkit-optimize-contrast;
}
.v-icon {
  color: white !important;
}
.three-dots:after {
  content: "\2807";
  font-size: 30px;
}
.my-editor {
  border-radius: 5px;
  background: #ffffff;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  width: 500px !important;
}
.prism-editor__textarea:focus {
  outline: none;
}
.box {
  border-radius: 5px;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.084);
  white-space: pre-line;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}
.bottom-marg {
  margin-bottom: 100px !important;
}
</style>

<template>
  <v-container class="m-5">
    <h1><strong>Components Structure</strong></h1>
    <div class="ml-10 mt-5">
      <h2>What is a Vue.js component?</h2>
    </div>
    <v-row class="mb-5">
      <v-col>
        <div class="ml-12 mt-12">
          A single page is composed of one or more components.<br><br>
          Each component is a self-contained piece of user interface consisting of HTML elements, Javascript functionality, and CSS properties.
          <br><br>
          If abstracted properly, a component can be reused in different parts of the application.
          <br><br>
          A component can be contained within another component.<br>
          We respectively call them parent and child components.
          <br><br>
          <i>Some examples</i> of components that can be contained in a typical Home page are <strong>Navigation Bar, Header, Footer, Introduction section, About Us section, and Contact us section.</strong>
        </div>
      </v-col>
      <v-col align="center">
        <img
          justify="top"
          class="comp-img"
          src="@/img/components.png"
        ></img>
      </v-col>
    </v-row>
    <div class="ml-10 mt-12">
      <h2>Why a component architecture?</h2>
    </div>
    <v-row class="mb-5">
      <v-col>
        <div class="ml-12 mt-5">
          The component architecture is not exclusively a Vue.js feature.<br>
          It is in fact used in other component-based frameworks such as
          <v-icon color="white">mdi-react</v-icon> React.js and
          <v-icon color="white">mdi-angular</v-icon> Angular.js<br><br>
          <h3><strong>The alternative? <v-icon color="red">mdi-close-thick</v-icon></strong></h3>
          <ul>
            <v-icon color="red">mdi-xml</v-icon> Long files<br>
            <v-icon color="red">mdi-telescope</v-icon> Big scope<br>
            <v-icon color="red">mdi-trending-up</v-icon> High Coupling<br>
            <v-icon color="red">mdi-trending-down</v-icon> Low Cohesion<br>
          </ul><br>
          <h3><strong>The benefits? <v-icon color="green">mdi-check-bold</v-icon></strong></h3>
          <ul>
            <v-icon color="green">mdi-code-tags-check</v-icon> Readable files<br>
            <v-icon color="green">mdi-microscope</v-icon> Smaller scope<br>
            <v-icon color="green">mdi-trending-down</v-icon> Low Coupling<br>
            <v-icon color="green">mdi-trending-up</v-icon> High Cohesion<br>
            <v-icon color="green">mdi-test-tube</v-icon> Better Testing<br>
          </ul><br>
          <h4><strong>Conclusion <v-icon color="white">mdi-file-edit</v-icon></strong></h4>
          <div class="ml-5">
            A component-based architecture in the front-end is the equivalent of using object oriented concepts in the back-end.
          </div>
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
.comp-img {
  width: 600px;
  image-rendering: pixelated;
  image-rendering: -webkit-optimize-contrast;
}
.v-icon {
  color: white !important;
}
</style>

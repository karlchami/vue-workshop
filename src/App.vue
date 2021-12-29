<template>
  <v-app id="app">
    <meta
      name="viewport"
      content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "Home",
  components: {},
  methods: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  margin: 0;
  overflow-y: auto !important;
}
canvas {
  display: block;
}
</style>

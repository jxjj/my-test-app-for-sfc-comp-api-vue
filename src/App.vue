<template>
  <div id="app">
    <h1>Hello</h1>
    <MySfcComponent />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MySfcComponent from "my-sfc-component";

export default {
  name: "App",
  components: {
    // HelloWorld,
    MySfcComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

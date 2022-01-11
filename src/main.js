// import "./compositionApi.js";
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
// import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

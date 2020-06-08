import App from "@/App.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import ScrollAnimation from "@/directives/scrollanimation";

Vue.directive("scrollanimation", ScrollAnimation);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App,
    title: "Patrick Bukenberger",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 },
      };
    }
  },
  base: "/",
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

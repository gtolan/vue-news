import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
// import ProductPage from "@/components/ProductPage";
// import ProductView from "@/components/ProductView";

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});

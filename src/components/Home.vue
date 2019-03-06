<template>
  <section>
    <div class="components">
      <Headlines/>
      <HomeCategory/>
      <ProductSlider/>
      <Subscribe/>
      <PageFooter/>
    </div>

    <!-- <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>
      <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}}: {{employee.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { employee_id: employee.employee_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>-->
    <div class="fixed-action-btn">
      <router-link to="/products" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
import db from "./firebaseInit";
import Carousel from "./CarouselContainer";
import Headlines from "./Headlines";
import HomeCategory from "./HomeCategory";
import ProductSlider from "./ProductSlider";
import PageFooter from "./PageFooter";
import Subscribe from "./SubscribeSignUp";

export default {
  name: "home",
  components: {
    Headlines,
    Carousel,
    HomeCategory,
    PageFooter,
    ProductSlider,
    Subscribe
  },
  data() {
    return {
      articles: [],
      employees: [],
      loading: true
    };
  },
  created() {},
  methods: {
    fetchData() {
      let apikey = "26cc3b2be92d47d2a974591e7a973790";
      console.log("apikey", apikey);
      let country = "us";
      let category = "top-headlines";
      let url = `https://newsapi.org/v2/${category}?country=${country}&apiKey=${apikey}`;
      fetch(url)
        .then(data => {
          console.log(data, "fetch res");
          return data.json();
        })
        .then(dat => {
          console.log(dat, "dat");
          this.articles = dat.articles;
        });
    }
  }
};
</script>
<style scoped>
section {
  margin-top: -66px;
}
</style>
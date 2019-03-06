<template>
  <section>
    <div class="components">
      <Headlines/>
      <Business/>
      <Technology/>
      <!-- <HomeCategory/>
      <ProductSlider/>
      <Subscribe/>-->
    </div>

    <div class="fixed-action-btn">
      <router-link to="/products" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
import db from "./firebaseInit";
import Headlines from "./Headlines";
import Business from "./BusinessSection";
import Technology from "./TechnologySection";

export default {
  name: "home",
  components: {
    Headlines,
    Business,
    Technology
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
  margin-top: -10px;
}
div.components {
  width: 100vw;
  overflow-x: hidden;
}
</style>
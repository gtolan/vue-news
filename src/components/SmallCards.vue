<template>
  <div class="small-cards">
    <h4 class="section-title">Technology</h4>
    <section id="bottom">
      <article
        v-for="(article,index) in articles"
        :key="index"
        :style="{backgroundImage:'url(' + article.urlToImage + ')'}"
      >
        <h5 class="article-title">{{article.title}}</h5>
      </article>
    </section>
  </div>
</template>

<script>
import EventBus from "../eventBus";
export default {
  name: "TechnologySection",
  data() {
    return {};
  },
  props: ["articles"],
  methods: {
    // fetchData() {
    //   let apikey = "26cc3b2be92d47d2a974591e7a973790";
    //   console.log("apikey", apikey);
    //   let country = "us";
    //   let category = "technology";
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&country=${country}&apiKey=${apikey}`;
    //   fetch(url)
    //     .then(data => {
    //       console.log(data, "fetch res");
    //       return data.json();
    //     })
    //     .then(dat => {
    //       console.log(dat, "dat");
    //       this.articles = dat.articles;
    //     });
    // }
  },
  mounted() {
    // this.fetchData();
  }
};
</script>

<style scoped>
section#bottom {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: black;
}
section article {
  width: 96%;
  margin: 2%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 13rem;
  display: inline-block;
}
.section-title {
  margin-left: 2rem;
  padding: 1rem;
}
.article-title {
  background-color: black;
  background: linear-gradient(180deg, black, #ffffff40);
  color: white;
  padding: 1rem;
  font-size: 1.36rem;
  line-height: 1.74rem;
}
</style>
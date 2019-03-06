<template>
  <section id="headlines">
    <article v-for="(article, index) in articles" :key="index">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <img :src="article.urlToImage" class="main-image">
    </article>
  </section>
</template>

<script>
export default {
  name: "Headlines",
  data() {
    return {
      articles: []
    };
  },
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
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
section#headlines {
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 31rem;
}
article {
  height: 31rem;
  display: grid;
  grid-template-rows: 7rem 7rem;
  transition: 0.4s ease-in-out;
}
article:nth-child(odd) {
  transform: translateX(-20vw);
}
article:hover:nth-child(odd) {
  transform: translateX(0vw);
  z-index: 10;
}
article:nth-child(even) {
  transform: translateX(0vw);
}
article:nth-child(even):hover {
  transform: translateX(-20vw);
  z-index: 10;
}
article .main-image {
  width: 70vw;
  grid-row: 1 / span 2;
}
article:nth-child(odd) h1 {
  width: 50vw;
  color: white;
  margin-left: 20vw;
  grid-row: 3;
}

article:hover h1 {
  position: relative;
  bottom: 23%;
  width: 65vw;
  margin-left: 2.5vw;
  color: white;
}
</style>
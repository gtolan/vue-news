<template>
  <section id="headlines">
    <article
      v-for="(article, index) in articles"
      :key="index"
      :style="{backgroundImage:'url(' + article.urlToImage + ')'}"
    >
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
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
  grid-template-columns: 1fr 1fr;
}
article {
  height: 31rem;
  transition: 0.4s ease-in-out;
  width: 70vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
article:nth-child(odd) {
  transform: translateX(-10vw);
  -webkit-clip-path: polygon(0 1%, 88% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 1%, 88% 0, 100% 100%, 0% 100%);
}
article:nth-child(even) {
  transform: translateX(-20vw);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
}
article:nth-child(even):hover {
  transform: translateX(-30vw);
  z-index: 10;
}
article:nth-child(odd):hover {
  transform: translateX(0vw);
  z-index: 10;
}
article .main-image {
  width: 70vw;
  grid-row: 1 / span 2;
  min-height: 31rem;
}
article h1 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 19.7rem;
  transition: 0.4s ease-in-out;
  font-size: 3rem;
  line-height: 3.6rem;
}
article p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 4rem;
  transition: 0.4s ease-in-out;
  color: white;
  width: 50vw;
}

article:nth-child(odd) h1 {
  width: 52vw;
  padding: 3rem;
  padding-top: 1rem;
  color: white;
  margin-left: 10vw;
  grid-row: 3;
  padding-right: 3rem;
  background-color: black;
  background: linear-gradient(90deg, black, #ffffff40);
  -webkit-clip-path: polygon(0 1%, 89% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 1%, 89% 0, 100% 100%, 0% 100%);
}
article:nth-child(even) h1 {
  width: 50vw;
  padding: 5rem;
  padding-top: 1rem;
  color: white;
  margin-right: 0vw;
  margin-left: 5vw;
  grid-row: 3;
  background-color: black;
  background: linear-gradient(90deg, #ffffff40, black);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
}
article:nth-child(even) h1 {
  margin-left: 7vw;
}
article:nth-child(even) p {
  margin-left: 13vw;
  width: 42vw;
}
article:nth-child(odd) h1,
article:nth-child(odd) p {
  margin-left: 7vw;
}
</style>
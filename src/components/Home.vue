<template>
  <section>
    <main>
      <LargeCards :articles="largeArticles"/>
      <MediumCards :articles="mediumArticles" :title="mediumTitle"/>
      <SmallCards :articles="smallArticles" :title="smallTitle"/>
    </main>
  </section>
</template>

<script>
import LargeCards from "./LargeCards";
import MediumCards from "./MediumCards";
import SmallCards from "./SmallCards";
import EventBus from "../eventBus";

export default {
  name: "home",
  components: {
    LargeCards,
    MediumCards,
    SmallCards
  },
  data() {
    return {
      articles: [],
      largeArticles: [],
      mediumArticles: [],
      smallArticles: [],
      largeTitle: null,
      mediumTitle: null,
      smallTitle: null,
      countries: {
        USA: "us",
        UK: "gb",
        Ireland: "ie",
        France: "fr",
        Canada: "ca"
      },
      categories: {
        tech: "tecnology",
        sport: "sport",
        entertainment: "entertainment",
        music: "music",
        science: "science-and-nature",
        business: "business",
        gaming: "gaming"
      }
    };
  },
  mounted() {
    EventBus.$on("updateLargeCards", value => {
      this.updateLargeCards(value);
    });
    EventBus.$on("searchQuery", value => {
      this.searchQuery(value);
    });
    EventBus.$on("updateMediumCards", value => {
      console.log("update med cards ON Home ev");
      this.updateMediumCards(value);
    });
    EventBus.$on("updateSmallCards", value => {
      console.log("update SM cards ON Home ev");
      this.updateSmallCards(value);
    });
    this.initLargeCards();
    this.initMediumCards();
    this.initSmallCards();
  },
  created() {},
  methods: {
    updateLargeCards(query, country) {
      let apikey = "26cc3b2be92d47d2a974591e7a973790";
      if (!country) {
        const country = "us";
      }
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&country=${country}&apiKey=${apikey}`;
      this.fetchHeadlines(url);
    },
    updateMediumCards(query) {
      console.log("update-med");
      let dest = "medium";
      this.mediumTitle = query;
      let country = "us";
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&country=${country}&apiKey=${
        process.env.VUE_APP_NEWS_API
      }`;
      this.fetchCategory(query, url, country, dest);
    },
    updateSmallCards(query) {
      console.log("update-sml");
      let dest = "small";
      this.smallTitle = query;
      let country = "us";
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&country=${country}&apiKey=${
        process.env.VUE_APP_NEWS_API
      }`;
      this.fetchCategory(query, url, country, dest);
    },
    initLargeCards() {
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        `apiKey=${process.env.VUE_APP_NEWS_API}`;
      this.fetchHeadlines(url);
    },
    initMediumCards() {
      let query = "business";
      this.mediumTitle = "business";
      let country = "us";
      let dest = "medium";
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&country=${country}&apiKey=${
        process.env.VUE_APP_NEWS_API
      }`;
      this.fetchCategory(query, url, country, dest);
    },
    initSmallCards() {
      let query = "technology";
      this.smallTitle = "technology";
      let country = "us";
      let dest = "small";
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&country=${country}&apiKey=${
        process.env.VUE_APP_NEWS_API
      }`;
      this.fetchCategory(query, url, country, dest);
    },
    searchQuery(query) {
      let url = `https://newsapi.org/v2/everything?q=${query}&from=2019-02-07&sortBy=publishedAt&apiKey=${
        process.env.VUE_APP_NEWS_API
      }`;
      this.fetchHeadlines(url);
    },
    fetchHeadlines(url) {
      fetch(url)
        .then(data => {
          return data.json();
        })
        .then(dat => {
          this.largeArticles = dat.articles;
        });
    },
    fetchCategory(cat, url, country, dest) {
      console.log("apikey", apikey, cat, url, country, dest);
      if (!country) {
        const country = "us";
      }
      if (!cat) {
        const category = cat;
      }
      if (!url) {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&country=${country}&apiKey=${
          process.env.VUE_APP_NEWS_API
        }`;
      }

      fetch(url)
        .then(data => {
          return data.json();
        })
        .then(dat => {
          console.log(dat, "dat", dest, "dest");
          if (dest == "medium") {
            this.mediumArticles = dat.articles;
          } else {
            this.smallArticles = dat.articles;
          }
        });
    }
  }
};
</script>
<style scoped>
section {
  margin-top: -10px;
}
main {
  width: 100vw;
  overflow-x: hidden;
}
</style>
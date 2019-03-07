<template>
  <div class="small-cards">
    <div class="section-controls">
      <h4 class="section-title">{{title | captilizeFirstLetter}}</h4>
      <select value="title | captilizeFirstLetter" @change="handleUpdateSmallCard($event)">
        <option v-for="(cat, index) in categories" :key="index">{{cat | captilizeFirstLetter}}</option>
      </select>
    </div>
    <section id="small">
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
  name: "SmallCards",
  data() {
    return {
      categories: [
        "headlines",
        "technology",
        "sport",
        "entertainment",
        "music",
        "business",
        "gaming"
      ],
      categoryApiQuery: [
        "headlines",
        "technology",
        "sport",
        "entertainment",
        "music",
        "business",
        "gaming"
      ]
    };
  },
  props: ["articles", "title"],
  methods: {
    handleUpdateSmallCard(ev) {
      let query = ev.target.value.toLowerCase();
      EventBus.$emit("updateSmallCards", query);
    }
  },
  filters: {
    captilizeFirstLetter: val => {
      if (val == "" || !val) return "";
      let str = val[0].toUpperCase() + val.substring(1);
      return str;
    }
  },
  mounted() {}
};
</script>

<style scoped>
section#small {
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
section article h5 {
  transition: 0.4s ease-in-out;
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
.section-controls {
  display: flex;
}
.section-controls h4 {
  display: inline-block;
  width: 55%;
  margin: 1rem 2.5%;
}
.section-controls select {
  display: inline-block;
  width: 35%;
  margin: 1rem 2.5%;
}
@media only screen and (min-width: 750px) {
  article:hover:nth-child(4n + 1) h5,
  article:hover:nth-child(4n + 2) h5 {
    margin-right: 0px;
    width: 101%;
    transform: translateX(103%);
    background-color: black;
    min-height: 13rem;
    margin-top: 0pc;
    margin-bottom: 0px;
  }
  article:hover:nth-child(4n + 3) h5,
  article:hover:nth-child(4n + 4) h5 {
    transform: translateX(-103%);
    width: 102%;
    background-color: black;
    min-height: 13rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@media only screen and (min-width: 500px) and (max-width: 750px) {
  section#small {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: black;
  }
  article:hover:nth-child(3n + 1) h5 {
    margin-right: 0px;
    width: 101%;
    transform: translateX(103%);
    background-color: black;
    min-height: 13rem;
    margin-top: 0pc;
    margin-bottom: 0px;
  }
  article:hover:nth-child(3n + 3) h5 {
    transform: translateX(-103%);
    width: 102%;
    background-color: black;
    min-height: 13rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  article:hover:nth-child(3n + 2) h5 {
    transform: translateY(103%);
    width: 102%;
    background-color: black;
    min-height: 13rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@media only screen and (max-width: 500px) {
  section#small {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: black;
  }
  article:hover {
    transform-origin: top center;
    transform: scale(1);
  }
}
</style>
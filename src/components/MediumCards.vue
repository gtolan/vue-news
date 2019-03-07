<template>
  <div class="medium-cards">
    <div class="section-controls">
      <h4 class="section-title">{{title | captilizeFirstLetter}}</h4>
      <select value="title | captilizeFirstLetter" @change="handleUpdateMediumCard($event)">
        <option v-for="(cat, index) in categories" :key="index">{{cat | captilizeFirstLetter}}</option>
      </select>
    </div>
    <section id="medium">
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
  name: "MediumCards",
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
  filters: {
    captilizeFirstLetter: val => {
      if (val == "" || !val) return "";
      let str = val[0].toUpperCase() + val.substring(1);
      return str;
    }
  },
  methods: {
    handleUpdateMediumCard(ev) {
      let query = ev.target.value.toLowerCase();
      EventBus.$emit("updateMediumCards", query);
    }
  },
  mounted() {}
};
</script>

<style scoped>
section#medium {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  transition: 0.3s ease-in-out;
}
@media only screen and (min-width: 750px) {
  article:hover:nth-child(3n + 1) {
    transform-origin: top left;
    transform: scale(2.1);
  }
  article:hover:nth-child(3n + 2) {
    transform-origin: top center;
    transform: scale(2.1);
  }
  article:hover:nth-child(3n + 3) {
    transform-origin: top right;
    transform: scale(2.1);
  }
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
@media only screen and (min-width: 500px) and (max-width: 750px) {
  section#medium {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: black;
  }
  article:hover:nth-child(2n + 1) {
    transform-origin: top left;
    transform: scale(2.1);
  }
  article:hover:nth-child(2n + 2) {
    transform-origin: top right;
    transform: scale(2.1);
  }
}
@media only screen and (max-width: 500px) {
  section#medium {
    display: grid;
    grid-template-columns: 1fr;
    background-color: black;
  }
  article:hover {
    transform-origin: top center;
    transform: scale(1);
  }
}
</style>
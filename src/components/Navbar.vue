 <template>
  <section>
    <nav class="black">
      <div class="nav-wrapper">
        <div>
          <a href="#!" class="brand-logo">NEWS</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
        <ul class="right hide-on-med-and-down">
          <li v-for="(cat,index) in categories" :key="index">
            <button
              class="grey darken-1"
              :class="{active : activetab === categoryApiQuery[index]}"
              @click="changeLargeCards(index)"
            >{{cat | captilizeFirstLetter}}</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="input-field col s6">
        <i class="material-icons prefix">search</i>
        <input type="search" id="querySearch">
        <label for="querySearch">Search news articles</label>
      </div>
    </div>

    <!-- <ul class="sidenav" id="mobile-demo">
      <li v-for="(cat,index) in categories" :key="index">
        <a :href="cat">{{cat}}</a>
      </li>
    </ul>-->
  </section>
</template>
  <script>
import EventBus from "../eventBus";
export default {
  name: "Navbar",
  data() {
    return {
      activetab: "headlines",
      slate: false,
      cartItems: [],
      categories: [
        "headlines",
        "technology",
        "sport",
        "entertainment",
        "music",
        "science",
        "business",
        "gaming"
      ],
      categoryApiQuery: [
        "headlines",
        "technology",
        "sport",
        "entertainment",
        "music",
        "science-and-nature",
        "business",
        "gaming"
      ]
    };
  },
  filters: {
    captilizeFirstLetter: val => {
      let str = val[0].toUpperCase() + val.substring(1);
      return str;
    }
  },
  props: ["cart", "totalQty"],
  mounted() {
    // EventBus.$on("addToCart", value => {
    //   this.addToCart(value);
    // });
    // EventBus.$on("deleteItem", value => {
    //   this.deleteItem(value);
    // });
  },
  updated() {},
  watch: {
    // call again the method if the route changes
    $route: ""
  },
  methods: {
    changeLargeCards(index) {
      console.log(index, "I");
      let query = this.categoryApiQuery[index];
      console.log(query, "Q");
      console.log("emit update large card", query);
      this.activetab = this.categories[index];
      EventBus.$emit("updateLargeCards", query);
    }
    // fetchData() {
    //   let apikey = "26cc3b2be92d47d2a974591e7a973790";
    //   console.log("apikey", apikey);
    //   let country = "us";
    //   let category = "top-headlines";
    //   let url = `https://newsapi.org/v2/${category}?country=${country}&apiKey=${apikey}`;
    //   fetch(url)
    //     .then(data => {
    //       console.log(data, "fetch res");
    //       return data.json();
    //     })
    //     .then(dat => {
    //       console.log(dat, "dat");
    //     });
    // }
  }
};
</script>

  <style scoped>
.nav-wrapper {
  display: grid;
  grid-template-columns: auto auto 2rem;
}
.brand-logo {
  width: 15rem;
  margin-left: 3rem;
}
.hide-on-med-and-down {
  display: inline-flex;
  justify-content: center;
}
.hide-on-med-and-down li button {
  height: 65px;
}
.hide-on-med-and-down li button.active {
  background-color: #524f4f !important;
  color: white;
  outline: 1px solid red;
  outline-offset: -4px;
}
#querySearch {
  width: 90vw;
  margin-left: 5vw;
}
</style>
<template>
  <footer class="page-footer black">
    <div class="container">
      <div class="row margin-b">
        <div class="col l6 s12">
          <h5 class="white-text">The News</h5>
          <p
            class="grey-text text-lighten-4"
          >Read the latest news from around the world on several topics</p>
          <ul>
            <li>
              <router-link class="grey-text text-lighten-3" to="/contact">Contact us</router-link>
            </li>
            <li>
              <router-link class="grey-text text-lighten-3" to="/about">About us</router-link>
            </li>
          </ul>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Topics</h5>
          <ul>
            <li>
              <router-link
                class="grey-text text-lighten-3"
                v-bind:to="{ name: 'product-page', params: { category: 'mens', brand:'all' }}"
              >Politics</router-link>
            </li>
            <li>
              <router-link
                class="grey-text text-lighten-3"
                v-bind:to="{ name: 'product-page', params: { category: 'womens', brand:'all' }}"
              >Technology</router-link>
            </li>
            <router-link
                class="grey-text text-lighten-3"
                v-bind:to="{ name: 'product-page', params: { category: 'womens', brand:'all' }}"
              >Health</router-link>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">Sports</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">Brands</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2019 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
};
</script>

<style scoped>
footer.page-footer {
  padding-top: 20px;
  color: #fff;
  background-color: #ee6e73;
  width: 100vw;
}
.margin-b {
  margin-bottom: 0px;
}
</style>
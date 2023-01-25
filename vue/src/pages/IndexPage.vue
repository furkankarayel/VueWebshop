<template>
  <q-page-container>
    <home-product-card :products="products" />
  </q-page-container>
</template>

<script>
import axios from "axios";

import HomeProductCard from "../components/HomeProductCard.vue";
export default {
  components: { HomeProductCard },
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    axios.get("http://localhost:8081/article/").then((response) => {
      this.products = response.data;
    });
  },
  methods: {
    showShop() {
      // navigate to shop page
    },
    showCart() {
      // navigate to cart page
    },
    addToCart(product) {
      // add product to cart
    },
  },
};
</script>

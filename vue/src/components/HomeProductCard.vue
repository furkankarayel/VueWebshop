<template>
  <div class="q-pa-md">
    <div class="row wrap justify-center items-start content-start q-gutter-md">
      <div class="col-auto" v-for="product in products" :key="product.id">
        <q-card
          flat
          bordered
          class="column"
          style="width: 200px; height: 500px"
        >
          <q-img :src="product.img" class="q-mb-lg col" />
          <q-card-section>
            <div class="h6 q-pa-sm">{{ product.name }}</div>
            <q-separator inset />
            <div class="p q-pa-sm">{{ product.description }}</div>

            <q-btn
              label="Add to cart"
              class="q-mt-lg"
              @click="addToCart(product)"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useShoppingCartStore } from "../stores/shoppingcart-store";
import { MutationType } from "pinia";
import { computed } from "vue";
export default defineComponent({
  name: "HomeProductCard",
  props: {
    products: {},
  },
  setup() {
    const store = useShoppingCartStore();

    store.$subscribe((mutation, state) => {
      console.log(mutation); // Info über den Inhalt und der Art der Mutation

      localStorage.setItem("cart", JSON.stringify(state)); //Persistente Daten
    });
    return {
      addToStore: store.addToCart,
    };
  },
  methods: {
    addToCart(product) {
      this.addToStore({
        id: product.id,
        img: product.img,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    },
  },
});
</script>

<template>
  <q-page>
    <div
      class="q-gutter-md q-pa-lg"
      style="
        max-width: 600px;
        margin: auto;
        align-items: center;
        justify-content: center;
      "
    >
      <q-table
        title="Warenkorb"
        :rows="getCartItems"
        :columns="columns"
        no-data-label="There are no articles in your shopping cart. Go shopping!"
        class="q-pa-lg"
      >
        <template v-slot:body-cell-Image="props">
          <q-td :props="props" auto-width>
            <img style="width: 100px; height: 100px" :src="props.row.img" />
          </q-td>
        </template>
        <template v-slot:bottom>
          <div style="display: flex; justify-content: flex-end">
            <div class="q-pa-lg">Total Items: {{ getAmount }}</div>
          </div>
        </template>
      </q-table>
      <div
        class="q-pt-lg"
        div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
        "
      >
        <q-btn
          v-if="getAmount > 0"
          label="Proceed to Checkout"
          color="primary"
          @click="checkSession"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useShoppingCartStore } from "../stores/shoppingcart-store";
import { computed } from "vue";
export default {
  data() {
    return {
      cartItems: [],
      totalCost: 0,
      columns: [
        { name: "Image", field: "img" },
        { name: "Product", field: "name" },
        { name: "Quantity", field: "quantity" },
        { name: "Price", field: "price", align: "right" },
      ],
    };
  },
  setup() {
    const store = useShoppingCartStore();

    store.$subscribe((mutation, state) => {
      console.log(mutation); // Info über den Inhalt und der Art der Mutation

      localStorage.setItem("cart", JSON.stringify(state)); //Persistente Daten
    });
    return {
      getCartItems: computed(() => store.getCartItems),
      getAmount: computed(() => store.getAmount),
      removeFromCart: store.removeFromCart,
      clearCart: store.clearCart,
    };
  },
  methods: {
    checkSession() {
      console.log("yes");
    },
  },
};
</script>

<template>
  <q-page class="q-pa-lg">
    <q-table
      title="Warenkorb"
      :rows="cartItems"
      :columns="columns"
      hide-bottom
    />
    <div class="text-right q-pt-lg">
      Total: {{ store.getCounter }}
      <q-btn label="Proceed to Checkout" color="primary" />
    </div>
  </q-page>
</template>

<script>
import { useShoppingCartStore } from "../stores/shoppingcart-store";
export default {
  data() {
    return {
      cartItems: [],
      totalCost: 0,
      columns: [
        { name: "Product", field: "product" },
        { name: "Quantity", field: "quantity" },
        { name: "Price", field: "price", align: "right" },
      ],
    };
  },
  setup() {
    const store = useShoppingCartStore();
    return {
      store,
      addToCart: store.addToCart,
      removeFromCart: store.removeFromCart,
      clearCart: store.clearCart,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.addToCart({ product: "No man", quantity: 3, price: 400 });
      this.addToCart({ product: "YES man", quantity: 3, price: 400 });
      this.cartItems = this.store.getCartItems;
    },
  },
};
</script>

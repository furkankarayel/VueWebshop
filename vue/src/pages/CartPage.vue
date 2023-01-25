<template>
  <q-page class="q-pa-lg">
    LOL
    <q-table :data="cartItems" :columns="columns" />
    <div class="text-right q-pt-lg">
      Total: {{ store.getCounter }}
      <q-btn label="Proceed to Checkout" color="primary" />
    </div>
  </q-page>
</template>

<script>
import { useCounterStore } from "../stores/example-store";
export default {
  data() {
    return {
      cartItems: [{ product: "Lenovo", quantity: "3", price: "300" }],
      totalCost: 0,
      columns: [
        { name: "Product", field: "product" },
        { name: "Quantity", field: "quantity" },
        { name: "Price", field: "price", align: "right" },
      ],
    };
  },
  setup() {
    // Fetch cart items and calculate total cost
    const store = useCounterStore();
    store.increment();
    return { store };
  },
};
</script>

import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore("shoppingcart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    getCartItems: (state) => state.cart,
    getAmount: (state) => state.cart.length,
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
    },
    clearCart() {
      this.cart = [];
    },
  },
});

import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore("shoppingcart", {
  state: () => ({
    cart: [],
    amount: 0,
  }),
  getters: {
    getCartItems: (state) => state.cart,
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
      this.amount++;
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      this.amount--;
    },
    clearCart() {
      this.cart = [];
      this.amount = 0;
    },
  },
});

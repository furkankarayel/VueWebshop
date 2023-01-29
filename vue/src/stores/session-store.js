import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => ({
    customer_id: 0,
    customer: "",
    role_id: 0,
    notLoggedIn: true,
  }),
  getters: {
    getCustomerId: (state) => state.customer_id,
    getCustomer: (state) => state.customer,
    getRoleId: (state) => state.role_id,
    getLoginStatus: (state) => state.notLoggedIn,
  },
  actions: {
    addSession(customer) {
      this.customer = customer[0].name;
      this.customer_id = customer[0].id;
      this.role_id = customer[0].role_id;
      this.notLoggedIn = false;
    },
  },
});

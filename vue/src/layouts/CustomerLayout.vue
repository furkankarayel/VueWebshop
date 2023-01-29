<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-pa-lg">
          <q-avatar
            class="bg-white text-accent"
            rounded
            size="50px"
            icon="storefront"
          />
        </div>

        <q-toolbar-title class="text-h4">
          <q-item to="/" class="text-secondary"> Vue Webshop </q-item>
        </q-toolbar-title>

        <q-btn-group rounded class="q-mr-xl">
          <q-btn
            label="Register"
            v-if="notLoggedIn"
            to="/register"
            flat
            class="bg-accent"
          />
          <q-btn
            label="Login"
            v-if="notLoggedIn"
            to="/login"
            flat
            class="bg-accent"
          />
        </q-btn-group>

        Welcome {{ getCustomer }}!
        <q-btn
          v-if="!notLoggedIn"
          class="q-ml-md bg-secondary text-accent"
          dense
          rectangle
          size="18px"
          icon="settings"
        ></q-btn>

        <q-btn
          class="q-ml-md bg-white text-accent"
          dense
          rectangle
          to="/cart"
          size="18px"
          icon="shopping_cart"
        >
          <q-badge color="red" floating>{{ getAmount }}</q-badge></q-btn
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useShoppingCartStore } from "../stores/shoppingcart-store";
import { computed } from "vue";
import { useSessionStore } from "../stores/session-store";
export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {};
  },
  setup() {
    const shoppingCartStore = useShoppingCartStore();
    const sessionStore = useSessionStore();
    return {
      getAmount: computed(() => shoppingCartStore.getAmount),
      getCustomer: computed(() => sessionStore.getCustomer),
      getRoleId: computed(() => sessionStore.getRoleId),
      notLoggedIn: computed(() => sessionStore.getLoginStatus),
    };
  },
});
</script>

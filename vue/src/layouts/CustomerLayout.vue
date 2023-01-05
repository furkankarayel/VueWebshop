<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-pa-lg">
          <q-avatar
            rounded
            size="50px"
            color="white"
            text-color="black"
            icon="storefront"
          />
        </div>

        <q-toolbar-title class="text-h4"> Vue Webshop </q-toolbar-title>

        <q-btn dense rectangle size="18px" icon="shopping_cart" class="q-ml-md">
          <q-badge color="red" floating>{{ itemsInCart }}</q-badge>
        </q-btn>
        <q-btn
          dense
          rectangle
          size="18px"
          icon="settings"
          class="q-ml-md"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

// const linksList = [
//   {
//     title: "Docs",
//     caption: "quasar.dev",
//     icon: "school",
//     link: "https://quasar.dev",
//   },
// ];

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      itemsInCart: 0,
    };
  },

  setup() {
    // const leftDrawerOpen = ref(false);
    // return {
    //   essentialLinks: linksList,
    //   leftDrawerOpen,
    //   toggleLeftDrawer() {
    //     leftDrawerOpen.value = !leftDrawerOpen.value;
    //   },
    // };
  },
});
</script>

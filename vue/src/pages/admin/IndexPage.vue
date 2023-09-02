<template>
  <q-layout view="lHh LpR fFx">
    <q-layout-header>
      <q-toolbar>
        <q-btn
          icon="menu"
          aria-label="Toggle Sidebar"
          @click="showSidebar = !showSidebar"
        />
        <q-toolbar-title>Admin Panel</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-drawer v-model="showSidebar" side="left" bordered>
      <q-list>
        <q-item link to="/admin/customers" icon="person" caption="Customers" />
        <q-item
          link
          to="/admin/articles"
          icon="description"
          caption="Articles"
        />
        <q-item
          link
          to="/admin/articlegroups"
          icon="view_agenda"
          caption="Articlegroups"
        />
        <q-item
          link
          to="/admin/categories"
          icon="view_list"
          caption="Categories"
        />
        <q-item
          link
          to="/admin/roles"
          icon="supervised_user_circle"
          caption="Roles"
        />
        <q-item link to="/admin/orders" icon="shopping_cart" caption="Orders" />
      </q-list>

      <q-separator />

      <q-item>
        <q-btn label="Logout" color="negative" />
      </q-item>
    </q-drawer>

    <q-page-container>
      <!-- Your router-view component here -->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

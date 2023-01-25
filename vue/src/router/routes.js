const routes = [
  {
    path: "/",
    component: () => import("layouts/CustomerLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/CustomerLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
  },
  {
    path: "/login",
    component: () => import("layouts/CustomerLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/cart",
    component: () => import("layouts/CustomerLayout.vue"),
    children: [{ path: "", component: () => import("pages/CartPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

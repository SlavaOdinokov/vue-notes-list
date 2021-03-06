import Vue from "vue";
import VueRouter from "vue-router";
import Firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/record",
    name: "notes",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Record.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;

import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/unix-time-converter",
        name: "Unix Time Converter",
        component: () => import("@/views/UnixTime.vue"),
      },
      {
        path: "/json-format-validate",
        name: "JSON Format/Validate",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;

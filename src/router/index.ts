import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { useAppStateStore } from '@/stores/app-state'

export type RouteRecord = RouteRecordRaw & {
  icon?: string
  hide?: boolean
}

export const mainMenuItems: Array<RouteRecord> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    icon: 'mdi-home'
  },
  {
    path: '/unix-time-converter',
    name: 'Unix Time Converter',
    component: () => import('@/views/UnixTime.vue'),
    icon: 'mdi-clock-outline'
  },
  {
    path: '/json-format-validate',
    name: 'JSON Format/Validate',
    component: () => import('@/views/JsonFormat.vue'),
    icon: 'mdi-code-json'
  },
  {
    path: '/bcrypt-generator',
    name: 'Bcrypt Generator',
    component: () => import('@/views/BcryptGenerator.vue'),
    icon: 'mdi-onepassword'
  },
  {
    path: '/base64-string',
    name: 'Base64 String Encode/Decode',
    component: () => import('@/views/Base64String.vue'),
    icon: 'mdi-history'
  },
  {
    path: '/base64-image',
    name: 'Base64 Image Encode/Decode',
    component: () => import('@/views/Base64Image.vue'),
    icon: 'mdi-upload'
  },
  {
    path: '/jwt-debugger',
    name: 'JWT Debugger',
    component: () => import('@/views/JwtDebugger.vue'),
    icon: 'mdi-cloud-upload'
  },
  {
    path: '/excel-to-json',
    name: 'CSV/Excel To Data',
    component: () => import('@/views/ExcelToJson.vue'),
    icon: 'mdi-file-excel-outline'
  },
  {
    path: '/data-to-excel',
    name: 'Data to Excel/CSV',
    component: () => import('@/views/Data2Excel.vue'),
    icon: 'mdi-file-excel-outline'
  },
  {
    path: '/backslash-escape-unescape',
    name: 'Backslash Escape/Unescape',
    component: () => import('@/views/BackslashEscapeUnescape.vue'),
    icon: 'mdi-file-excel-outline'
  },
  {
    path: '/regexp-tester',
    name: 'RegExp Tester',
    component: () => import('@/views/RegExpTester.vue'),
    icon: 'mdi-history'
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/Layout.vue'),
    children: mainMenuItems
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue')
  },
  {
    // the 404 route, when none of the above matches
    path: '/404',
    name: '404',
    component: () => import('@/views/Error404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    const appStateStore = useAppStateStore()
    // Start the route progress bar.
    appStateStore.startScreenLoading()
  }
  next()
})

router.afterEach((to, from) => {
  const appStateStore = useAppStateStore()
  // Complete the animation of the route progress bar.
  setTimeout(() => {
    appStateStore.stopScreenLoading()
  }, 300)
})

export default router

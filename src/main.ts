import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalizedGeneric,
} from 'vue-router';

import AboutView from './components/AboutView.vue';
import App from './components/App.vue';
import Dashboard from './components/DashboardView.vue';
import HomeView from './components/HomeView.vue';
import Logout from './components/LogoutView.vue';
import NotFound from './components/NotFoundView.vue';

import { i18n } from './utils/resources';
import { checkAuth } from './utils/auth';

import './style/main.scss';

const ROOT_PATH = '/';

const routes = [
  { path: `${ROOT_PATH}/`, name: 'Home', component: HomeView },
  { path: `${ROOT_PATH}/dashboard`, component: Dashboard },
  { path: `${ROOT_PATH}/about`, component: AboutView },
  { path: `${ROOT_PATH}/logout`, component: Logout },
  {
    path: `${ROOT_PATH}/:pathMatch(.*)+`,
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function canUserAccess(to: RouteLocationNormalizedGeneric) {
  if (to.path === '/about' || to.path === '/') return true;
  return checkAuth();
}

router.beforeEach(async (to) => {
  const canAccess = canUserAccess(to);
  if (!canAccess) {
    return '/';
  }
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');

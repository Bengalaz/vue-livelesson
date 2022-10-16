import { createWebHistory, createRouter } from "vue-router";
import ProductsListPage from './pages/ProductsListPage.vue';
import ProductsDetailPage from './pages/ProductsDetailPage.vue';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import UserInfoPage from './pages/UserInfoPage.vue';
import EmployeePage from './pages/EmployeePage.vue';

const routes = [
    {path: '/', component: ProductsListPage},
    {path: '/products/:id', component: ProductsDetailPage},
    {path: '/cart', component: ShoppingCartPage},
    {path: '/user-info', component: UserInfoPage},
    {path: '/employee', component: EmployeePage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

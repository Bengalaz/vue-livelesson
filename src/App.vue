<template>
  <NavBar :numberOfItems="numberOfItems" />
  <!--<router-link to="/cart">Shopping Cart</router-link> -->
  <router-view :shoppingCart="shoppingCart" :products="products" :userInfo="userInfo" @addToCart="addToCart"
    @userInfoSaved="updateUserInfo">
  </router-view>
</template>

<script >
import { computed } from '@vue/reactivity';
import products from './pages/products';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      shoppingCartIds: [],
      products,
      userInfo: { name: '', age: 0, address: '' },
    }
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartIds.map(id => {
        return this.products.find(p => p.id === id);
      });
    },
    numberOfItems() {
      return this.shoppingCartIds.length;
    }
  },
  methods: {
    addToCart(id) {
      this.shoppingCartIds.push(id);
      console.log(this.shoppingCartIds);
    },
    updateUserInfo(name, age, address) {
      this.userInfo = {
        name, age, address,
      }
    }
  }
}
</script>

<style >
h2 {
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
</style>

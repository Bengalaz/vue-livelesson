<template>
    <h1>Shopping Cart Page</h1>
    <div v-for="product in shoppingCart" :key="product.id">
        <router-link :to="`/products/${product.id}`">
            <h3>{{product.name}}</h3>
        </router-link>
        <p>{{product.price}}</p>
        <button @click="addToCart(product.id)">Add to Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCartPage',
    props: ['shoppingCart'],
};
</script>
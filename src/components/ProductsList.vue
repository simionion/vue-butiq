<script>
export default {
  name: "ProductsList",
  props: ['products'],
}
</script>

<template>
<div class="grid-wrap">
    <div class="product-item" v-for="product in products" v-bind:key="product.id">
      <router-link v-bind:to="'/products/' + product.id">
        <img v-bind:src="product.imageName" v-bind:alt="'Bottle of ' + product.name"/>
      </router-link>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link v-bind:to="'/products/' + product.id">
        <button>
          View Details
        </button>
      </router-link>
    </div>
  </div>
</template>

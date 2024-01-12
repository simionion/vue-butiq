<script>
export default {
  name: "ShoppingCartList",
  props: ['products'],
  emits: ['removeCartItem'],
  methods: {
    removeFromCart: function (productId) {
     this.$emit('removeCartItem', productId);
    }
  }
}
</script>

<template>
  <div class="product-container" v-for="product in products" v-bind:key="product.id">
    <img v-bind:src="product.imageName" v-bind:alt="'Bottle of ' + product.imageName" class="product-image">
    <div class="details-wrap">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
    </div>
    <button class="remove-button" @click="removeFromCart(product.id)">Remove from Cart</button>
  </div>
</template>

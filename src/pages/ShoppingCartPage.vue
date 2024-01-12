<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length === 0">
    <p>Your cart is empty.</p>
  </div>
  <div v-else>
    <ShoppingCartList v-bind:products="cartItems" @removeCartItem="handleRemoveFromCart"></ShoppingCartList>
    <button class="checkout-button" disabled>Proceed to Checkout</button>
  </div>
</template>

<script>
import {cartItems} from "@/temp-data";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: 'ShoppingCartPage',
  components: {
    ShoppingCartList
  },
  data() {
    return {
      cartItems,
    }
  },
  methods: {
    handleRemoveFromCart(productId) {
      this.cartItems = this.cartItems.filter(product => product.id !== productId);
    }
  }
}
</script>

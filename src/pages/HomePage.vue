<script setup>
import {computed, reactive} from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

setTimeout(() => {
  author.name = 'Jane Doe'
  author.books.push('Vue 5 - The Awesomeness')
}, 5000);

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length
})
</script>

<template>
  <div class="home-page">
    <h1>Home Page</h1>
  </div>
  <p>Has published books:</p>
  <div>{{author.name}}</div>
  <div>{{ publishedBooksMessage }}</div>
  <ul>
    <li v-for="book in author.books" :key="book">{{ book }}</li>
  </ul>
</template>

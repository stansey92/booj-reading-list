<template>
  <div>
      <div class="text-xl my-3">Explore Our Library</div>
      <Card 
        v-for="(book, index) in books"
        :key="index"
        :img="book.volumeInfo.imageLinks.thumbnail"
        :title="book.volumeInfo.title"
        :authors="book.volumeInfo.authors"
        :allBookData="book"
      ></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      books: [],
    }
  },
  methods: {
    async pullBooks() {
      let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=javascript&key=${process.env.VUE_APP_API_KEY}`)
      let json = await response.json()
      this.books = json.items
    }
  },
  mounted() {
    this.pullBooks()
  }
}
</script>

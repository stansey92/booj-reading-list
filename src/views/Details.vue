<template>
  <div>
    <router-link to="/"><a class="hover:underline text-blue-700">Return to library</a></router-link>
      <div class="text-sm text-gray-600 mt-5">
        Title
      </div>
      <div class="text-lg text-gray-800">
        {{ data.volumeInfo.title }}
      </div>
      <div class="text-sm text-gray-600 mt-5">
        Authors
      </div>
      <div v-for="(author, index) in data.volumeInfo.authors"  :key="index" class="text-lg text-gray-800">
        {{ author }}
      </div>
      <div class="text-sm text-gray-600 mt-5">
        Pages
      </div>
      <div class="text-lg text-gray-800">
        {{ data.volumeInfo.pageCount }}
      </div>
      <div class="text-sm text-gray-600 mt-5">
        Published Date
      </div>
      <div class="text-lg text-gray-800">
        {{ data.volumeInfo.publishedDate }}
      </div>
       <div class="text-sm text-gray-600 mt-5">
        Description
      </div>
      <div class="text-lg text-gray-800">
        {{ data.volumeInfo.description }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    data: Object
  }
}


</script>

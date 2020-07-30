<template>
  <div class="flex min-h-screen flex-col">
    <Navbar></Navbar>
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class=" col-span-1 border p-5">
          <ReadingList></ReadingList>
        </div>
        <div class="col-span-3 border p-5">
          <router-view></router-view>
        </div>
        
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ReadingList from '@/components/ReadingList'

export default {
  name: 'Home',
  components: {
    Navbar,
    ReadingList
  }
}

</script>


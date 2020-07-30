<template>
    <div class="flex flex-row border-t border-b py-5 m-5 hover:bg-gray-100">
        <img 
        class="mr-5"
        :src="img"
        />
        <div class="flex flex-col">
            <div  @click="showDetails" class="text-xl text-gray-800 pb-3 hover:underline cursor-pointer">{{ title }}</div>
            <div 
                v-for="(author, index) in authors" 
                :key="index"
                class="text-sm text-gray-600">
                {{ author }}
            </div>
            <a @click="saveBook(allBookData)" class="text-indigo-500 mt-5 hover:underline cursor-pointer">Save book</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            img: String,
            title: String,
            authors: Array,
            allBookData: Object,
        },
        methods: {
            saveBook(book) {
                this.$store.commit('saveBook', book)
            },
            showDetails() {
                this.$router.push({name: 'Details', params:  { data: this.allBookData } })
            }
        }
    }
</script>

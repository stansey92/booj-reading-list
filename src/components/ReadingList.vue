<template>
    <div>
        <div class="flex justify-between items-end my-3">
            <div class="text-xl">Saved Titles</div>
            <a class="text-sm text-blue-500 hover:underline cursor-pointer" @click="sortBooks">Sort A-Z</a>
        </div>
        
         <div v-if="savedBooks.length" class="flex flex-wrap lg:justify-center">
            <div 
                v-for="(file, index) in savedBooks" 
                :key="index" 
                class="flex group relative m-2 border justify-center items-center border-gray-400 rounded bg-white hover:shadow overflow-hidden"
                @drop.prevent="switchBookOrder(index)" 
                @dragover.prevent
            >
                <img 
                    :src="file.volumeInfo.imageLinks.thumbnail"
                    class="cursor-pointer p-2"
                    draggable="true"
                    @dragstart="dragStart(index)"
                />
                <div @click="removeBook(index)" class="invisible group-hover:visible absolute bottom-0 w-full p-1 flex justify-center items-center text-xs text-white cursor-pointer bg-red-600 hover:bg-red-800">
                    Remove
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center p-5 text-gray-500">
            You havent saved any books yet, save some below!
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'ReadingList',
        data() {
            return {
                draggedBookIndex: null,
            }
        },
        computed: {
            savedBooks() {
                return this.$store.state.savedBooks
            }
        },
        methods: {
            removeBook(index) {
                this.$store.commit('removeBook', index)
            },
            dragStart(index) {
                this.draggedBookIndex = index
            },
            switchBookOrder(newBookIndex) {
                let payload = {
                    currentBookIndex: this.draggedBookIndex,
                    newBookIndex: newBookIndex
                }
                this.$store.commit('switchBookOrder', payload)
            },
            sortBooks() {
                this.$store.commit('sortByTitle')
            }
        }
    
    }
</script>

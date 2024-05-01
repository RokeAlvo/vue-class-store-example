<script setup lang="ts">
import Cat from './components/Cat.vue';
import {useToDoStore} from './todoStore'
import {ref} from 'vue'

const store = useToDoStore();
const inputValue = ref('')
function addCat(val:string) {
  store.data.addCat(inputValue.value)
}
</script>

<template>
  <div>
    <h1>{{ store.data.title }}</h1>
    <p>len: {{ store.data.len }}</p>
    <ul>
      <cat 
      v-for="cat in store.data.categories"
      :cat="cat"
    />
    </ul>
  </div>
  <hr />
  <div>
    <span>Add category: </span>
    <input 
    type="text"
    v-model="inputValue"
    >
    <button type="button" @click="addCat">add</button>
  </div>
</template>

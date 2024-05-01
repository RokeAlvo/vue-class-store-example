<script setup lang="ts">
import Todo from './Todo.vue'
import {ref} from 'vue'

const props = defineProps<{ cat: Category }>();
const input = ref('')
function addTodo() {
  props.cat.addTodo(input.value)
}
</script>

<template>
  <li>
    <h2>{{ props.cat.name }}</h2>
    <p>len: {{ props.cat.len }}</p>
    <h3>todos: </h3>
  <ul>
    <todo 
      v-for="todo in props.cat.todos"
      :todo="todo"
    /> 
  </ul>
  <div>
    <span>add todo: </span>
    <input type="text" v-model="input">
    <button type="button" @click="addTodo">add</button>
  </div>
  </li>
</template>

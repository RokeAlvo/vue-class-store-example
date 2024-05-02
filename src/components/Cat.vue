<script setup lang="ts">
import Todo from './Todo.vue'
import {ref} from 'vue'
import {Category} from "../todoStore";

const props = defineProps<{ cat: Category }>();

const input = ref('')

function addTodo() {
  props.cat.addTodo(input.value)
}
</script>

<template>
  <li>
    <h2>{{ props.cat.name }}
      <span style="font-size: 0.5em">
        (len: {{ props.cat.len }})
      </span>
    </h2>
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

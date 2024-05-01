<script setup lang="ts">
const props = defineProps<{ cat: Category }>();
</script>

<template>
  <ul>
    <todo 
      v-for="todo in props.cat.todos"
      :todo="todo"
    /> 
  </li>
</template>

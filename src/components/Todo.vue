<script setup lang="ts">
import type {ToDo} from '../todoStore'
const props = defineProps<{ todo: ToDo }>();
</script>

<template>
  <li>
    <p>todo</p>
  </li>
</template>

<template>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', $event)"
        @edit-task="$emit('edit-task', ...$event)"
      />
    </ul>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import TaskItem from './TaskItem.vue';
  
  const props = defineProps<{ tasks: { id: number; text: string }[] }>();
  const emit = defineEmits<{
    (e: 'delete-task', id: number): void;
    (e: 'edit-task', id: number, text: string): void;
  }>();
  </script>
  
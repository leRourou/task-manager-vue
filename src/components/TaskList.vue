<template>
  <v-list>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete-task="$emit('delete-task', $event)"
      @edit-task="$emit('edit-task', $event.id, $event.text)"
      @toggle-done="$emit('toggle-done', $event)"
    />
  </v-list>
</template>

<script setup lang="ts">
import TaskItem from './TaskItem.vue';
import type { Task } from '../types/task';

const props = defineProps<{ tasks: Task[] }>();
const emit = defineEmits<{
  (e: 'delete-task', id: number): void;
  (e: 'edit-task', id: number, text: string): void;
  (e: 'toggle-done', id: number): void;
}>();
</script>

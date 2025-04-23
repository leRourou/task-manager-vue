<template>
  <v-container>
    <TaskForm @add-task="addTask" />
    <TaskList :tasks="tasks" @delete-task="deleteTask" @edit-task="editTask" @toggle-done="toggleDone" />
  </v-container>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import type { Task } from '../types/task';

const props = defineProps<{
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
  toggleDone: (id: number) => void;
}>();
</script>
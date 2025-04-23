<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Gestionnaire de tâches</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" variant="text">Accueil</v-btn>
      <v-btn to="/taches" variant="text">Tâches</v-btn>
    </v-app-bar>

    <v-main class="mt-10">
      <router-view :tasks="tasks" :add-task="addTask" :delete-task="deleteTask" :edit-task="editTask" :toggle-done="toggleDone" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Task } from './types/task';

const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));
let nextId = tasks.value.length ? Math.max(...tasks.value.map(t => t.id)) + 1 : 1;

watch(tasks, () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}, { deep: true });

function addTask(text: string) {
  tasks.value.push({ id: nextId++, text, done: false });
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id);
}

function editTask(id: number, text: string) {
  const task = tasks.value.find(t => t.id === id);
  if (task) task.text = text;
}

function toggleDone(id: number) {
  const task = tasks.value.find(t => t.id === id);
  if (task) task.done = !task.done;
}
</script>
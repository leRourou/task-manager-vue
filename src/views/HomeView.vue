<template>
    <div>
      <h1>Gestionnaire de tâches</h1>
      <TaskForm @add-task="addTask" />
      <TaskList 
        :tasks="tasks" 
        @delete-task="deleteTask" 
        @edit-task="editTask"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import TaskForm from '../components/TaskForm.vue';
  import TaskList from '../components/TaskList.vue';
  
  interface Task {
    id: number;
    text: string;
  }
  
  const tasks = ref<Task[]>([]);
  let nextId = 1;
  
  function addTask(text: string) {
    tasks.value.push({ id: nextId++, text });
  }
  
  function deleteTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id);
  }
  
  function editTask(id: number, newText: string) {
    const task = tasks.value.find(t => t.id === id);
    if (task) task.text = newText;
  }
  </script>
<template>
    <form @submit.prevent="submit">
      <input v-model="newTask" placeholder="Nouvelle tâche" />
      <button type="submit">Ajouter</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits<{
    (e: 'add-task', text: string): void;
  }>();
  
  const newTask = ref('');
  
  function submit() {
    if (newTask.value.trim()) {
      emit('add-task', newTask.value.trim());
      newTask.value = '';
    }
  }
  </script>
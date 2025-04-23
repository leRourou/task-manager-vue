<template>
  <v-form @submit.prevent="submit" class="d-flex align-center gap-2">
    <v-text-field v-model="newTask" label="Nouvelle tâche" hide-details />
    <v-btn type="submit" color="primary">Ajouter</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ (e: 'add-task', text: string): void }>();
const newTask = ref('');

function submit() {
  if (newTask.value.trim()) {
    emit('add-task', newTask.value.trim());
    newTask.value = '';
  }
}
</script>
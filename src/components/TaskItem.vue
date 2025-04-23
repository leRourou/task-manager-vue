<template>
  <v-card class="mb-2 pa-2 d-flex align-center justify-space-between">
    <div class="d-flex align-center">
      <v-btn @click="$emit('toggle-done', task.id)">{{ task.done ? 'Fait' : 'À faire' }}</v-btn>
      <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }" class="ms-2">
        {{ task.text }}
      </span>
    </div>

    <div class="d-flex">
      <v-btn @click="toggleEdit">{{ editing ? 'Valider' : 'Modifier' }}</v-btn>
      <v-btn color="red" @click="$emit('delete-task', task.id)">Supprimer</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Task } from '../types/task';

const props = defineProps<{ task: Task }>();
const emit = defineEmits<{
  (e: 'delete-task', id: number): void;
  (e: 'edit-task', payload: { id: number; text: string }): void;
  (e: 'toggle-done', id: number): void;
}>();

const editing = ref(false);
const editedText = ref(props.task.text);

watch(() => props.task.text, (val) => (editedText.value = val));

function toggleEdit() {
  if (editing.value) {
    emit('edit-task', { id: props.task.id, text: editedText.value });
  }
  editing.value = !editing.value;
}
</script>
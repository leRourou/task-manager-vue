<template>
  <li>
    <span v-if="!editing">{{ task.text }}</span>
    <input v-else v-model="editedText" />
    <button @click="toggleEdit">{{ editing ? 'Valider' : 'Modifier' }}</button>
    <button @click="$emit('delete-task', task.id)">Supprimer</button>
  </li>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps<{ task: { id: number; text: string } }>();
const emit = defineEmits<{
  (e: 'delete-task', id: number): void;
  (e: 'edit-task', id: number, text: string): void;
}>();

const editing = ref(false);
const editedText = ref(props.task.text);

watch(() => props.task.text, (newVal) => {
  editedText.value = newVal;
});

function toggleEdit() {
  if (editing.value) {
    emit('edit-task', props.task.id, editedText.value);
  }
  editing.value = !editing.value;
}
</script>
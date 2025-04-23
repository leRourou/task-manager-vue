<template>
    <v-container>
      <h2>Liste complète des tâches</h2>
      <v-list>
        <v-list-item
          v-for="task in tasks"
          :key="task.id"
        >
          <v-list-item-content>
            <v-list-item-title :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
              {{ task.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Task } from '../types/task';
  
  const props = defineProps<{
    tasks: Task[];
  }>();
  </script>
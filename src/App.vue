<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <AppHeader @open-nav="navOpen = true" />
    <NavDrawer v-model:open="navOpen" />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import NavDrawer from '@/components/NavDrawer.vue'
import AppFooter from '@/components/AppFooter.vue'

const navOpen = ref(false)
</script>

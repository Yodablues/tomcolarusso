<template>
  <header class="bg-card border-b border-border px-4 py-3 flex items-center gap-3 sticky top-0 z-50">
    <Button
      variant="ghost"
      size="icon"
      class="text-foreground hover:bg-muted hover:text-foreground"
      aria-label="Open navigation menu"
      @click="emit('open-nav')"
    >
      <Menu class="h-5 w-5" />
    </Button>
    <RouterLink to="/" class="font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors">
      Tom Colarusso
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import { Menu } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const emit = defineEmits<{
  'open-nav': []
}>()
</script>

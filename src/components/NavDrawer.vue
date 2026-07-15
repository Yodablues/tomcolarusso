<template>
  <Sheet :open="open" @update:open="emit('update:open', $event)">
    <SheetContent
      side="left"
      class="bg-card border-border w-64"
    >
      <SheetHeader>
        <SheetTitle class="text-foreground text-left">
          Tom Colarusso
        </SheetTitle>
      </SheetHeader>
      <nav class="mt-6 flex flex-col gap-1">
        <RouterLink
          v-for="route in navRoutes"
          :key="route.path"
          :to="route.path"
          class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground font-medium"
          @click="emit('update:open', false)"
        >
          <component :is="route.icon" class="h-4 w-4 text-primary" />
          {{ route.name }}
        </RouterLink>
      </nav>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Home, Briefcase, Camera, Mail } from '@lucide/vue'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const navRoutes = [
  { path: '/', name: 'Home', icon: Home },
  { path: '/experience', name: 'Experience', icon: Briefcase },
  { path: '/photos', name: 'Photos', icon: Camera },
  { path: '/contact', name: 'Contact', icon: Mail },
] as const
</script>

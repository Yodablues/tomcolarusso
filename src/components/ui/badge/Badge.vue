<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
  variant?: 'default' | 'secondary' | 'outline'
}>()

const variantClasses = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
  outline: 'border border-border text-foreground bg-transparent',
}
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
      variantClasses[props.variant ?? 'default'],
      props.class,
    )"
  >
    <slot />
  </span>
</template>

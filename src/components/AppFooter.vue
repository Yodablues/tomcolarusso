<template>
  <footer class="border-t border-border text-muted-foreground text-center py-4 text-sm">
    © {{ year }} Tom Colarusso
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

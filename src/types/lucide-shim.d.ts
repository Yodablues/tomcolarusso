// shadcn-vue generates imports from 'lucide-vue-next' (deprecated package).
// vite.config.ts aliases it to '@lucide/vue' so those imports resolve correctly.
// This declaration silences any residual TS complaints about the old package name.
declare module 'lucide-vue-next' {
  export * from '@lucide/vue'
}

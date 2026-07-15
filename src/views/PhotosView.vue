<template>
  <div class="px-6 py-16 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-foreground">Photos</h1>
    <p class="text-muted-foreground mb-10">A few snapshots.</p>

    <div v-if="photos.length === 0" class="flex flex-col items-center gap-4 py-24 text-muted-foreground">
      <Camera class="h-12 w-12 opacity-30" />
      <p>Photos coming soon — drop your images into <code class="text-sm bg-muted px-1.5 py-0.5 rounded text-foreground">src/assets/photos/</code> to get started.</p>
    </div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <button
        v-for="(photo, i) in photos"
        :key="photo.src"
        class="aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        @click="openLightbox(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </button>
    </div>

    <!-- Lightbox -->
    <Dialog :open="lightboxOpen" @update:open="lightboxOpen = $event">
      <DialogContent class="max-w-4xl p-2 bg-black/95 border-border">
        <div class="relative flex items-center justify-center min-h-[60vh]">
          <img
            v-if="activePhoto"
            :src="activePhoto.src"
            :alt="activePhoto.alt"
            class="max-h-[80vh] max-w-full object-contain rounded"
          />
          <!-- Prev -->
          <button
            v-if="photos.length > 1"
            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Previous photo"
            @click="prev"
          >
            <ChevronLeft class="h-5 w-5" />
          </button>
          <!-- Next -->
          <button
            v-if="photos.length > 1"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Next photo"
            @click="next"
          >
            <ChevronRight class="h-5 w-5" />
          </button>
        </div>
        <p v-if="activePhoto?.alt" class="text-center text-sm text-muted-foreground mt-2 pb-2">
          {{ activePhoto.alt }}
        </p>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Camera, ChevronLeft, ChevronRight } from '@lucide/vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface Photo {
  src: string
  alt: string
}

// Add your photos to src/assets/photos/ and import them here.
// Example:
// import myPhoto from '@/assets/photos/my-photo.jpg'
// const photos: Photo[] = [{ src: myPhoto, alt: 'Description' }]
const photos: Photo[] = []

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const activePhoto = computed(() => photos[activeIndex.value] ?? null)

function openLightbox(index: number) {
  activeIndex.value = index
  lightboxOpen.value = true
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % photos.length
}
</script>

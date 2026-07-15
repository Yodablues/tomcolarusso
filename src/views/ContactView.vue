<template>
  <div class="px-6 py-16 max-w-lg mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-foreground">Contact</h1>
    <p class="text-muted-foreground mb-10">Send me a message and I'll get back to you.</p>

    <!-- Success state -->
    <div v-if="submitted" class="flex flex-col items-center gap-4 py-16 text-center">
      <div class="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
        <CheckCircle class="h-7 w-7 text-primary" />
      </div>
      <h2 class="text-xl font-semibold text-foreground">Message sent!</h2>
      <p class="text-muted-foreground">Thanks for reaching out. I'll be in touch soon.</p>
      <Button variant="outline" @click="submitted = false">Send another</Button>
    </div>

    <!-- Form -->
    <form
      v-else
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="flex flex-col gap-5"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input class="hidden" name="bot-field" />

      <div class="flex flex-col gap-1.5">
        <Label for="name">Name</Label>
        <Input
          id="name"
          v-model="form.name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          autocomplete="name"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <Label for="email">Email</Label>
        <Input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autocomplete="email"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <Label for="message">Message</Label>
        <Textarea
          id="message"
          v-model="form.message"
          name="message"
          placeholder="What's on your mind?"
          rows="5"
          required
          class="min-h-[120px]"
        />
      </div>

      <Button type="submit" :disabled="submitting" class="self-start">
        <Loader2 v-if="submitting" class="h-4 w-4 mr-2 animate-spin" />
        {{ submitting ? 'Sending…' : 'Send Message' }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CheckCircle, Loader2 } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const form = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  submitting.value = true
  try {
    const body = new URLSearchParams({
      'form-name': 'contact',
      ...form,
    })
    await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } finally {
    submitting.value = false
  }
}
</script>

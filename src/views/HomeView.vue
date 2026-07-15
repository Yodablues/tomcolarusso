<template>
  <div>
    <!-- Hero -->
    <section class="px-6 py-20 sm:py-28 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
        Tom Colarusso
      </h1>
      <p class="text-lg sm:text-xl text-primary font-medium">
        Full-Stack Software Engineer
      </p>
      <p class="text-muted-foreground leading-relaxed max-w-xl">
        Buffalo, NY &mdash; 13+ years building fintech platforms, distributed systems,
        and real-time web applications. Currently at Verivend.
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <Button as-child size="lg">
          <RouterLink to="/experience">View Work</RouterLink>
        </Button>
        <Button as-child variant="outline" size="lg">
          <a href="https://www.linkedin.com/in/tom-colarusso-2650047a" target="_blank" rel="noopener noreferrer">
            <ExternalLink class="h-4 w-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        <Button as-child variant="outline" size="lg">
          <RouterLink to="/contact">Contact Me</RouterLink>
        </Button>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="px-6 max-w-3xl mx-auto flex justify-center">
      <img
        :src="heroImage"
        alt="Tom Colarusso"
        class="w-full max-w-sm aspect-[3/4] object-cover object-top rounded-xl"
      />
    </section>

    <!-- Divider -->
    <div class="border-t border-border" />

    <!-- About -->
    <section class="px-6 py-16 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-foreground">About</h2>
      <p class="text-muted-foreground leading-relaxed">
        Full-stack software engineering leader with 13+ years of experience spanning backend and
        frontend development, distributed systems, and engineering management. Currently driving
        full-stack delivery on a fintech capital-raising platform for private equity and venture
        capital deals &mdash; architecting a multi-year Vue 2 to Vue 3 platform migration and authoring
        .NET/C# backend services alongside the frontends they power. Proven track record building and
        leading high-performing teams, designing scalable distributed systems, and delivering
        real-time web applications.
      </p>
    </section>

    <!-- Divider -->
    <div class="border-t border-border" />

    <!-- Skills -->
    <section class="px-6 py-16 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-foreground">Skills</h2>
      <div class="flex flex-col gap-4">
        <div v-for="group in skills" :key="group.label">
          <p class="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
            {{ group.label }}
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="skill in group.items"
              :key="skill"
              variant="secondary"
            >
              {{ skill }}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import heroImage from '@/assets/photos/IMG_4368.JPEG'

const skills = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router', 'AngularJS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    items: ['C# / .NET', 'Entity Framework Core', 'REST API Design', 'Node.js', 'PHP', 'NServiceBus'],
  },
  {
    label: 'Infrastructure & Tooling',
    items: ['AWS', 'Docker', 'Netlify', 'Datadog', 'CircleCI', 'GitHub Actions', 'Vitest', 'Playwright', 'Storybook'],
  },
  {
    label: 'Architecture',
    items: ['Distributed Systems', 'Event-Driven', 'CQRS', 'SOA', 'Microservices', 'Domain-Driven Design'],
  },
]
</script>

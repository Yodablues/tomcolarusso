<template>
  <div class="px-6 py-16 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-foreground">Experience</h1>
    <p class="text-muted-foreground mb-12">13+ years building software across fintech, automotive, and enterprise platforms.</p>

    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden="true" />

      <div class="flex flex-col gap-10">
        <article
          v-for="job in jobs"
          :key="job.company + job.title"
          class="relative pl-10"
        >
          <!-- Dot -->
          <div class="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div class="h-2 w-2 rounded-full bg-primary" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-foreground">{{ job.title }}</h2>
            <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
              <span class="text-primary font-medium text-sm">{{ job.company }}</span>
              <span class="text-muted-foreground text-sm">·</span>
              <span class="text-muted-foreground text-sm">{{ job.period }}</span>
              <span class="text-muted-foreground text-sm">·</span>
              <span class="text-muted-foreground text-sm">{{ job.location }}</span>
            </div>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="bullet in job.bullets"
                :key="bullet"
                class="text-muted-foreground text-sm leading-relaxed flex gap-2"
              >
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {{ bullet }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const jobs = [
  {
    title: 'Lead Full-Stack Engineer',
    company: 'Verivend',
    period: 'Mar 2025 – Present',
    location: 'Buffalo, NY (Hybrid)',
    bullets: [
      'Lead full-stack engineer on a fintech capital-raising and investor-management platform for private equity and venture capital deals; shipped 780+ merged pull requests and 560+ tickets across a .NET/C# backend and two Vue frontends.',
      'Architected a multi-year Vue 2 to Vue 3, TypeScript, Vite, and Pinia migration of the entire investor platform, designing a proxy-routing system that ran both apps side-by-side for zero-downtime, incremental rollout across 15+ feature areas.',
      'Authored .NET/C# backend endpoints, including async bulk-action infrastructure (dispatcher pattern, dependency injection, feature-flag gating), cross-org admin deal APIs, and end-to-end DB-to-API-to-UI features, alongside the Vue frontends that consume them.',
      'Root-caused and resolved systemic production bug classes, including silent bulk-action failures, auth/session logout incidents, and a platform-wide timezone rendering defect.',
      'Consolidated five workflow-item types onto shared platform abstractions, eliminating large-scale UI duplication and a recurring regression.',
      'Implemented XSS/HTML sanitization across client and API layers and stood up a Datadog RUM/APM observability stack with global error handling and business-flow tracking.',
      'Built CI/CD and developer-experience tooling, including ephemeral per-PR preview deployments, Storybook test infrastructure, and an automated AI-powered PR-review system.',
    ],
  },
  {
    title: 'Engineering Manager',
    company: 'ACV Auctions',
    period: 'Apr 2022 – Mar 2025',
    location: 'Buffalo, NY',
    bullets: [
      'Managed multiple engineering teams delivering features for a leading automotive auction platform.',
      'Drove team performance, hiring, mentoring, and cross-functional collaboration across the organization.',
    ],
  },
  {
    title: 'Team Lead, Frontend Platform',
    company: 'ACV Auctions',
    period: 'Jun 2021 – Jun 2022',
    location: 'Buffalo, NY',
    bullets: [
      'Led the frontend platform team, establishing engineering standards and tooling adopted org-wide.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'ACV Auctions',
    period: 'May 2017 – Jun 2021',
    location: 'Buffalo, NY',
    bullets: [
      'Built web applications using AngularJS, Vue.js, KnockoutJS, and PHP.',
      'Developed real-time bidding features using PubNub within an event-driven architecture.',
      'Tested features with Mocha and Jasmine, maintaining high code coverage and passing CI builds.',
      'Supported production environments by deploying hotfixes in response to detected bugs.',
    ],
  },
  {
    title: 'API Developer',
    company: 'TCGplayer.com',
    period: 'Nov 2016 – May 2017',
    location: 'Syracuse, NY (Remote)',
    bullets: [
      'Developed a public-facing RESTful API following Microsoft REST API design guidelines and best practices.',
      'Designed and implemented OAuth 2.0 API authentication, including third-party application integration.',
      'Architected a new Umbraco CMS cloud project, defining solution architecture, branching, testing, and deployment strategy.',
    ],
  },
  {
    title: 'Software Architect',
    company: 'Liazon (now WTW)',
    period: 'Feb 2016 – Nov 2016',
    location: 'Buffalo, NY',
    bullets: [
      'Designed new features and enhanced system architecture across a distributed platform built on MVC, NServiceBus, MSMQ, DTC, WebAPI, AngularJS, SQL Server, RavenDB, and Redis.',
      'Provided architectural guidance to delivery teams on patterns and frameworks for new development initiatives.',
      'Created internal tools and processes that supported feature delivery for 80+ developers.',
      'Delivered training sessions on MSMQ, DTC, NServiceBus, AngularJS, CQRS, RESTful services, SOA, and Domain-Driven Design.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Liazon (now WTW)',
    period: 'Oct 2015 – Feb 2016',
    location: 'Buffalo, NY',
    bullets: [
      'Contributed to the infrastructure and architecture team, enhancing distributed system components.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Liazon (now WTW)',
    period: 'Jul 2014 – Oct 2015',
    location: 'Buffalo, NY',
    bullets: [
      'Developed a global benefits management web application using RESTful services and AngularJS in an Agile/Scrum environment.',
      'Created RESTful services with .NET, Entity Framework, NServiceBus, and Castle Windsor IoC for dependency injection.',
      'Built an AngularJS single-page application with custom services, controllers, and directives targeting mobile and desktop.',
      'Conducted pair programming and code reviews to help team members meet sprint commitments.',
    ],
  },
  {
    title: 'Software Engineer I',
    company: 'ValueCentric',
    period: 'Jun 2012 – Jun 2014',
    location: 'Buffalo, NY',
    bullets: [
      'Designed, developed, tested, and deployed web applications and BI tools using Oracle 11g, ColdFusion, and JavaScript/jQuery.',
      'Modernized legacy products with AJAX, jQuery, and CSS3, building a new reporting front-end.',
      'Maintained and enhanced a web-based mobile application with SVG/Canvas charting, data grids, and PDF/Excel exports for iOS and Android.',
      'Wrote SQL queries using PL/SQL, packages, stored procedures, and bind variables for pharmacy reporting data.',
    ],
  },
]
</script>

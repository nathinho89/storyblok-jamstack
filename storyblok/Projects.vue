<script setup>
defineProps({
    blok: Object
});
</script>

<template>
   <div class="container project-page">
    <div class="project-title">
      <h1>{{ blok.name || 'New Project' }}</h1>
      <NuxtLink :to="{ name: 'index'}">Go Back</NuxtLink>
    </div>
    <div class="project-description">
        <img :src="blok.image?.filename || 'https://placehold.co/300x175'" :alt="blok.image?.alt || `Image for ${blok.name ?? 'Project'}`" />
        <p>{{ blok.description }}</p>
    </div>
   </div>
</template>
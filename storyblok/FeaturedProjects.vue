<script setup> 
defineProps({
    blok: Object
});
</script>

<template>
   <div class="container" v-editable="blok">
    <h1>{{ blok.title}}</h1>
    <div class="featured-projects">
        <div class="project" v-for="project in blok.projects" :key="project._uid">
            <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
                <img :src="project.content.image.filename" :alt="project.content.image?.alt" />
                <h2>{{ project.content.name }}</h2>
            </NuxtLink>
        </div>
    </div>
   </div>
</template>
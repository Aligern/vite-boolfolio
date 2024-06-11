<template>
    <div>
        <ul>
            <li v-for="project in projects" :key="project.id"> {{ project.title }}
                <div>{{ project.description?.name }}</div>

                <router-link :to="{ name: 'project-detail', params: { slug: project.slug } }">Read more about this project</router-link>
            </li>
        </ul>
        <button @click="getAllProjects()" class="btn btn-primary"><i class="fa-solid fa-rotate-right"></i>Next Page</button>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import axios from 'axios';
    export default {
        name: 'ProjectList',
        data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getAllProjects(){
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data);
        this.projects = res.data.results;
      });
    }
  },
  mounted() {
    this.getAllProjects();
  }
    }
</script>

<style lang="sass" scoped>

</style>
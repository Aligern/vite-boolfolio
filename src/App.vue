<template>


  <ul>
    <li v-for="project in projects" :key="project.id"> {{ project.title }}</li>
  </ul>

    <main class="container">
    </main>

</template>

<script>
import {store} from './store.js'
import axios from 'axios'
export default {
  name: 'App',
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

<style lang="scss" scoped>

</style>
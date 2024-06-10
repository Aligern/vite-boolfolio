<template>
  <h1>Hello</h1>
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
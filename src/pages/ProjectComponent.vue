<template>
    <div class="container" v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="store.imgBasePath + project.image" :alt="project.title">
        <p>{{ project.content }}</p>
        <span>{{ project.type?.name }}</span>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import axios from 'axios';
    export default {
        name: 'ProjectComponent',
        data() {
            return {
                store,
                project: null
            }
        },
        methods: {
            getProject(){
                //console.log(this.$route);
                // we get the slug from the route
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                //console.log(res.data.results);
                this.project = res.data.results;
            }).catch((error)=>{
                //console.log(error);
                //console.log(error.response.data);
                this.$router.push({ name: 'not-found' });
            }).finally();
        } 
        },
        mounted() {
            this.getProject();
        }
    }
</script>

<style lang="sass" scoped>

</style>
<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImage" class="img-fluid rounded-start" :alt="item.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.content }}</p>
                    <p class="card-text">{{ item.updated_at }}</p>
                    <span>{{ item.type?.name }}</span>
                    <router-link :to="{ name: 'project-detail', params: { slug: item.slug } }" class="btn btn-primary">Project details</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    export default {
        name: 'ProjectCardComponent',
        props: ['item'],
        data() {
            return {
                store
            }
        },
        computed: {
            getImage() {
                return this.item.image ? this.store.imgBasePath + this.item.image :'/src/assets/images/KingPin.jpg';
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
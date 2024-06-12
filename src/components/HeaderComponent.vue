<template>
    <header>
        <nav class="nav d-flex justify-content-between">
            <div id="nav-left">
                <h1 class="ps-2">Boolfolio</h1>
            </div>

            <div id="nav-right">
                <button class="btn btn-success mx-2" v-for="(project, index) in menuProjects" :key="index">
                    <router-link class="text-white text-decoration-none" :to="{ name: project.routeName }" >
                        {{ project.label }} 
                    </router-link>
                </button>
            </div>

        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
            menuProjects: [
                {
                label: 'Home',
                routeName: 'home',
                },
                {
                label: 'Projects',
                routeName: 'projects',
            },
        ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
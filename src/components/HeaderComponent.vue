<template>
    <nav class="nav d-flex justify-content-between">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <button v-for="(project, index) in menuProjects" :key="index">
                    <router-link :to="{ name: project.routeName }" class="nav-link btn">
                        {{ project.label }} 
                    </router-link>
                </button>
            </div>
    </nav>
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
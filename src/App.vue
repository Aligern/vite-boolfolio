<template>
    <h1>Boolfolio</h1>


    <ul>
      <li v-for="(project, index) in menuProjects" :key="index">
        <router-link :to="{ name: project.routeName }" class="nav-link">
            {{ project.label }} 
        </router-link>
      </li>
    </ul>

    <main class="container">
      <router-view></router-view>
    </main>

</template>

<script>
export default {
  name: 'App',
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
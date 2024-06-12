<template>
    <HeaderComponent />
    <main class="container">
      <router-view></router-view>
    </main>
</template>

<script>
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
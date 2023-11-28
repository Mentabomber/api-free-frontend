<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHome from './pages/AppHome.vue'



export default {
  components: {
    AppHeader,
    AppHome,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  methods: {
   
  },
  created() {
  }
}

</script>

<template>
  <div class="contenitore">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;

.hidden {
  display: none;
}

.contenitore {
  background-color: grey;
  height: 100vh;
}
</style>
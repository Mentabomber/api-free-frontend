<script>
import { store } from "../store"
import axios from 'axios'

export default {
  name: "AppHeader",
  data() {
    return {
      store
    }
  },
  methods: {
    
  }
}

</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-4" id="title">
          <h2>Just Post It!</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
  background-color: white;
}

.container-fluid {

  height: 50px;
  border-bottom: 4px solid black;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);


  .row {
    height: 100%;
    width: 90%;

    margin: 0 auto;

    h2 {
      color: $colore_primario;
      font-size: 30px;

    }

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
      font-size: 20px
    }

    a:hover {
      color: $colore_primario;
    }
  }



}
</style>

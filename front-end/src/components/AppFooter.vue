<script>
import { store } from "../store"

export default {
  name: "AppFooter",
  data() {
    return {
      store
    }
  },

}

</script>

<template>
    <footer>
        <div class="container-fluid text-align-center">
            <h1>Footer</h1>
        </div>
    </footer>
    </template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.container-fluid {
  
  height: 100px;
  color: white;
  
  background-color: #0D233D;
  border-bottom: 4px solid black;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 20px;
  

  .row {
    
    width: 90%;
    padding-top: 20px;
    margin: 0 auto;
    font-weight: bold;
    

   h2 {
    color : $colore_primario;
    font-size: 50px;
    
   }

   a {
    text-decoration: none;
    color: inherit;
    
    font-size: 18px;

    i {
        margin-left: 10px;
        font-size: 30px;
    }  
   }

   a:hover {
    color : $colore_primario;
   }
   
  .name,
  .profile-links {
    font-size: 1rem;

        a, i {
            font-size: 0.85rem;
        }
  }

  }
  
 
}
</style>

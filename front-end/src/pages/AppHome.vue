<script>
import axios from 'axios';
import { store } from '../store'


export default {
    name: 'home',
    components: {

    },
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
        
    },
    created() {
       
    }
}
</script>


<template>

        <div class="container-fluid">
            <div>
                <h1>Benvenuto in Just Post It!</h1>
            </div>

            <div>
                <!-- da trasformare in router links -->
                <ul>
                    <li>
                        <router-link :to="{ name: 'newPost' }">Crea un nuovo post</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'postsList' }">Vedi tutti i tuoi post</router-link>
                    </li>
                    <li>
                        <a href="#">Disconnect</a>
                    </li>
                    <li>
                        <a href="#">Profilo</a>
                    </li>
                </ul>
            </div>
        </div>



</template>
<style scoped lang="scss">

</style>


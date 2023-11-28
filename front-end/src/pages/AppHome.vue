<script>
import axios from 'axios';
import { store } from '../store'


export default {
    name: 'AppHome',
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
                    <a href="#">Crea un nuovo post</a>
                </li>
                <li>
                    <a href="#">Vedi tutti i tuoi post</a>
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


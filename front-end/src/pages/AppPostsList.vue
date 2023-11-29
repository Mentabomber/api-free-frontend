<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'postsList',
    data() {
        return {
            store,
        }
    },
    methods: {
      
    },
    mounted() {
        
            axios.get(store.API_URL).then(res => {
                store.posts = res.data;
            }).catch(err => {
            console.error("Axios request error:", err);
  }); 
    }

}
</script>


<template>
    <div class="contenitore">
        <div class="container-fluid">
            <div>
                <h1>Benvenuto in Just Post It!</h1>
            </div>

            <div>
                <ul>
                    <li v-for="(post, index) in store.posts" :key="index">
                        <router-link :to="{ name: 'post', params: {  slug: post.slug }}">{{post.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
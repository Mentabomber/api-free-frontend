<script>

import axios from 'axios';
import { store } from '../store'

export default {
    name: 'post',
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
        const slug = this.$route.params.slug;
        console.log(slug);
        axios.get(store.API_URL_show + slug).then(res => {
            console.log(res.data);
                store.post = res.data;
            }).catch(err => {
            console.error("Axios request error:", err)});
    },
    created() {
       
    }
}
</script>


<template>

      
    <div class="post-container">
        <div id="post">
            <h3>{{ store.post.title }}</h3>
            <img src="" alt="">
            <p>{{ store.post.content }}</p>
        </div>
    </div>


</template>
<style scoped lang="scss">
.post-container{
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
#post{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 500px;
    height: 200px;
    background-color: red;
    color: white;
    border: 1px solid black;
    text-align: center;
    align-self: center;
    h3{
        width: 100%;
        background-color: aqua;
        height: 50px;

    }
    p{
        width: 100%;
        text-align: left;
        align-self: start;
    }
}
</style>


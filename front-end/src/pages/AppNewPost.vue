<script>

import axios from 'axios';
import { store } from '../store'

export default {
    name: 'newPost',
    components: {
    },
    data() {
        return {
            store,
            formData: {
                title: '',
                slug: '',
                content: '',
                image: '',
                published: true,
                categoryId: 1,
                tags: [1,2,3],
                userId: 1
            },
        }
    },
    methods: {
        createPost(){
            const formData = new FormData();
            formData.append('title', this.formData.title);
            formData.append('content', this.formData.content);
            formData.append('image', this.formData.image);   
            console.log(this.formData);

            axios.post(store.API_URL, this.formData)
                    .then(res => {
                        console.log('Post created successfully:', res.data);
                        store.user_message = 'Post created successfully';
                    })
                    .catch(error => {
                        console.error('Error creating post:', error);
                    store.user_message = 'Error creating post';
                    });
        }
    },
    mounted() {
 
    },
    created() {
       
    }
}
</script>


<template>

      
    <div class="post-container">
        <h2>Crea il tuo nuovo post!</h2>
        <form @submit.prevent="createPost">
            <div>
                <label for="title">Titolo: </label>
                <input v-model="formData.title" type="text" name="title" id="title">
                <br>
            </div>
            <div>
                <label for="content">Contenuto: </label>
                <textarea v-model="formData.content" class="user-input" name="content" id="content"></textarea>
                <br>
            </div>
            <div>
                <label for="image">Immagine: </label>
                <input  type="file" name="image" id="image">
                <br>
            </div>
            <div style="width: 100%;">
                <input style="width: 100px;" type="submit" value="Just Post It!">
            </div>
           
        </form>

        
    </div>


</template>
<style scoped lang="scss">
.post-container{
    overflow-y: auto;
    width: 500px;
    display: flex;
    justify-content: center;
    margin: auto;
    padding-top: 50px;
    flex-wrap: wrap;
    text-align: center;
    h2{
        width: 100%;
    }
    form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        input{
            width: 100%;
        }
        label{
            width: 100%
        }
        .user-input{
            width: 500px;
            height: 150px;
            resize: none;
            vertical-align: top;
        }
    }
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


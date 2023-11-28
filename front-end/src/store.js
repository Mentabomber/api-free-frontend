import { reactive } from "vue";

export const store = reactive({
    API_URL_show: 'http://localhost:3307/posts/',
    posts: [],
    post: {},
});
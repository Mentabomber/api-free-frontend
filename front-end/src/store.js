import { reactive } from "vue";

export const store = reactive({
    API_URL: 'http://localhost:3307/posts/',
    posts: [],
    post: {},
});
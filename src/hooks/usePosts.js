import axios from "axios";
import {ref, onMounted} from "vue";

export async function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostLoadingIndicator = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                params: {
                    _page: 1,
                    _limit: limit,
                }
            });
            totalPages.value = Math.ceil(100 / limit);
            console.log('response.data',response.data)
            posts.value = response.data;
        } catch (e) {
            alert('Ошибка usePosts')
        } finally {
            isPostLoadingIndicator.value = false;
        }
    };
    onMounted(fetching);
    return {
        posts, totalPages, isPostLoadingIndicator
    }
}
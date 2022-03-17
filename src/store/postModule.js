import axios from "axios";

export default {
    state: () => ({
        posts: [],
        title: '',
        body: '',
        isPostLoadingIndicator: false,
        selectedSort: '',
        selectedSearch: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: null,
        sortOptions: [
            {value: 'title', name: 'По по загловку'},
            {value: 'body', name: 'По содержимому'},
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getter) {
            return getter.sortedPosts.filter((post) => post.title.includes(state.searchQuery) || post.body.includes(state.searchQuery));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostLoadingIndicator = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        }
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(100 / this.limit));
                commit('setPosts', response.data);
            } catch (e) {
                console.log('fetchPosts',e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                state.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?f', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                });
                commit('setTotalPages', Math.ceil(100 / this.limit));
                commit('setPosts', [...this.posts, ...response.data]);
            } catch (e) {
                console.log('loadMorePosts',e)
            }
        },
    },
    namespaced: true,
}
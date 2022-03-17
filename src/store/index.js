import {createStore} from 'vuex';
import postModule from "@/store/postModule";

export default createStore({
    state: {
        likes: 2,
        isAuth: false,
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 3;
        },
    },
    mutations: {
        incrementLikes(state) {
            return state.likes += 1;
        },
        decrementLikes(state) {
            return state.likes -= 1;
        }
    },
    action: {},
    modules: {
        postModule
    }
})
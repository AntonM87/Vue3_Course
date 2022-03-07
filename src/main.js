import MainPage from "@/pages/MainPage";
import {createApp,h} from "vue";
import router from "@/router/router";

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return router[this.currentRoute] || MainPage
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(SimpleRouter).mount('#app')
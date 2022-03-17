import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import Vintersection from "@/directives/Vintersection";
import Vfocus from "@/directives/Vfocus";
import store from '@/store';

const app = createApp(App);
app.directive('intersection', Vintersection)
    .directive('focus', Vfocus)
    .use(router)
    .use(store)
    .mount('#app')



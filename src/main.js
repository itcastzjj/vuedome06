import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Swipe,
    SwipeItem,
    Lazyload,
    Tabs,
    Tab,
    Card,
    PullRefresh ,
    Loading ,
    Form ,
    Field ,
    Button ,
    Toast ,
    Notify ,
    Image as VanImage
} from 'vant';
import 'vant/lib/index.css';
import "./css/base/base.css"
// import "./mock/mock.js"
createApp(App).
// vant组件
use(Tabbar).use(TabbarItem).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload, {
    loading: "https://oss.shop.eduwork.cn/ad/2020-0820-5f3dfe85ae3fd.png"
}).use(Tabs).use(Tab).use(Card).use(PullRefresh).use(Loading).use(Form).use(Field).use(Button).use(Toast).use(Notify).use(VanImage).
use(store).use(router).mount('#app')
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import routes from "./routes";

//配置路由
const router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(){
        //y=0代表滚条在最上方
        return {y:0}
    }
})

export default router
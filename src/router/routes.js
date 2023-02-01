import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

export default [
    //重定向，在项目跑起来的时候，访问/，立马让它定向到首页
    {
        path:'*',
        redirect:'/home'
    },
    {
        path:'/detail/:skuid?',
        component:Detail,
        meta:{
            show:true
        }
    },
    {
        path:'/home',
        component:Home,
        meta:{
            show:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            show:false
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        meta:{
            show:true
        },
        props:($route)=>{
            return{
                keyword:$route.params.keyword,
                k:$route.query.k,
            }
        }
    },
]
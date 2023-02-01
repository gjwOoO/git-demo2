import axios from "axios";

//引入进度条
import nProgress from "nprogress";
//start:进度条开始，done：进度条结束
//引入进度条样式
import 'nprogress/nprogress.css'

const mockRequests = axios.create({
    //基础路径，发请求的时候，路径中会出现api
    baseURL:'/mock',
    //代表请求超时的时间
    timeout:5000,
})

//请求拦截器：再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
mockRequests.interceptors.request.use((config)=>{
    //进度条开始
    nProgress.start()

    //config:配置对象，里面有一个很重要的属性，headers请求头
    return config
})

//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    //进度条结束
    nProgress.done()

    //成功回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data
},(err)=>{
    return Promise.reject(new err('failed'))
})

export default mockRequests
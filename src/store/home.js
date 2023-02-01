//home模块的小仓库

import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'

const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList(context){
        let result = await reqCategoryList()
        if(result.code==200){
            context.commit('CATEGORYLIST',result.data)
        }
        
    },
    //获取首页轮播图的数据
    async getBannerList(context){
        let result = await reqGetBannerList()
        if(result.code == 200){
            context.commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList(context){
        let result = await reqFloorList()
        if(result.code == 200){
            context.commit('GETFLOORLIST',result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const state = {
    //三级菜单中的数据
    categoryList:[],
    //轮播图数据
    bannerList:[],
    //floor数据
    floorList:[]
}
const getters = {}

export default {
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}
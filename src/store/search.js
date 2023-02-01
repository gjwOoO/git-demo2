import {reqGetSearchInfo} from '@/api'
//search模块的小仓库
const actions = {
    async getSearchList(context,params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            context.commit('GETSEARCHLIST',result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const state = {
    searchList:{}
}
//计算属性， 在项目中，简化仓库中的数据
const getters = {
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    }
}
export default {
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}
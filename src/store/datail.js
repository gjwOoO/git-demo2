import { reqGoodsInfo } from "@/api"
const actions = {
    async getGoodsInfo(context,skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            context.commit('GETGOODSINFO',result.data)
        }
    }
}
const mutations = {
    GETGOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    skuSaleAttrValueList(state){
        return state.goodsInfo.skuInfo.skuSaleAttrValueList || []
    }
}
const state = {
    goodsInfo:{}
}
export default {
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}
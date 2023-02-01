//当前这个模块，API进行统一管理
import axios1 from "./axios1";
import mockRequests from './mockAxios'

//三级联动的接口
//  /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = ()=>{
    //发请求,axios
    return axios1({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

//banner（home轮播图接口）
export const reqGetBannerList = ()=>{
    return mockRequests({
        url:'/banner',
        method:'get',
    })
}

//获取floor数据
export const reqFloorList = ()=>{
    return mockRequests({
        url:'/floor',
        method:'get',
    })
}

//获取搜索数据  地址：/api/list  post  需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//当前这个接口，给服务器传递一个默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params)=>{
    return axios1({
        url:'/list',
        method:'post',
        data:params
    })
}

//获取产品详情信息的接口  URL：/api/item/{ skuId }   get
export const reqGoodsInfo = (skuId)=>{
    return axios1({
        url:`/item/${ skuId }`,
        method:'get'
    })
}
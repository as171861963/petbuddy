import shopsApi from "../services/shopsServices.js";

export default {
    namespaced:true,
    state:{
        data:{
            eachPage:6,
            curPage:1,
            maxPage:0,
            total:0,
            rows:[{
                "_id" : "1234",
                "name" : "淘淘宠物店",
                "contact" : "陈涛",
                "phone" : "18182339945",
                "addr" : "青羊区",
                "type" : "食物",
                "license" : "/imgs/a92a80459989a.jpg",
                "imgs" : "/imgs/a96745a186e47.jpg",
                "startTime" : "2019-07-19T03:51:38.000Z",
                "endTime" : "2019-07-19T03:51:40.000Z",
                "area" : "221",
                "parking" : "有",
                "wifi" : "有",
                "brief" : "爱的宠物店",
                "managerId" : "5d2fca61d3235b2258c66433",
                "status" : "审核中",
            }]
        }
    },
    mutations:{
        setStatus(state,payload){
            state.data.rows = payload;
        },
        changeShopStatus(state,payload){
            payload.status = "不可用";
        }
    },
    actions:{
        async getShopsAsync({commit},payload){
            const {data} = await shopsApi.getShops(payload);
            commit("setStatus",data); 
        },
        async changeShopStatusAsync({commit},payload){
            const {data} = await shopsApi.changeShopStatus({ _id:payload._id,newAttr:{ status:"不可用" } });
            if(data.ok>0){
                commit("changeShopStatus",payload);
            }
        }
    }
}
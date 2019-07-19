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
            Object.assign(state.data,payload);
        },
        setPage(state,payload){
            state.data.curPage = payload;
        }
    },
    actions:{
        async getShopsAsync({commit,state},payload){
            const eachPage = state.data.eachPage;
            const curPage = state.data.curPage;
            const params = { managerId:payload,page:{ eachPage, curPage } }
            const {data} = await shopsApi.getShops(params);
            commit("setStatus",data); 
        },
        getShopsByPage(context,payload){
           context.commit("setPage",payload.curPage); 
           this._actions.getShopsAsync(payload.managerId)
        }
    }
}
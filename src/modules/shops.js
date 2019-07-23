import shopsApi from "../services/shopsServices.js";

export default {
    namespaced:true,
    state:{
            rows:[]
    },
    mutations:{
        setStatus(state,payload){
            state.rows = payload;
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
        },

        async applayShopAsync({commit},payload){
            const data = await shopsApi.applyShop(payload);
            return data;
        }
    }
}
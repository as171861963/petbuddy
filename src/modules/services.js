import servicesApi from "../services/servicesServices";

export default {
    namespaced:true,
    state:{
        shopServices:[]
    },
    mutations:{
        combineShopServices(state,payload){
            state.shopServices = payload;
        }
    },
    actions:{
        async getShopsByManagerIdAsync({commit},payload){
            const {data} = await servicesApi.getShopsByManagerId(payload);
            return data;    
        },

        async addServiceAsync({commit},payload){
            const data = await servicesApi.addService(payload);
            return data;
        },

        async getServicesByManagerIdAsync({ commit },payload){
            const {data} = await servicesApi.getServicesByManagerId(payload);
            commit("combineShopServices",data);
        }
    }
}
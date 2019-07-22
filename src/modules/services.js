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
            const {data,status} = await servicesApi.addService(payload);
            if(status === 200){
                return true;
            }
        },

        async getServicesByManagerIdAsync({ commit },payload){
            const {data} = await servicesApi.getServicesByManagerId(payload);
            commit("combineShopServices",data);
        },

        async deleteServiceByIdAsync({ commit },payload){
            const {data} = await servicesApi.deleteServiceById(payload);
            if(data.ok>0){
                return true;
            }
        },

        async updateServiceAsync({ commit },payload){
            const {data} = await servicesApi.updateServiceAsync(payload);
            if(data.ok>0){
                return true;
            }
        },
    }
}
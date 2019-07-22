import messagesApi from "../services/messagesServices.js";

export default {
    namespaced:true,
    state:{
       rows:[]
    },
    mutations:{
        combineRows(state,payload){
            state.rows = payload;
        },
        deleteItem(state,payload){
            state.rows.splice(payload,1);
        }
    },
    actions:{
        async getMessagesAsync({commit},payload){
            const {data} = await messagesApi.getMessages(payload);
            commit("combineRows",data)
        },

        async changeShopStatusAsync({commit},payload){
            const {data} = await messagesApi.changeShopStatus({  
                _id:payload._id,
                newAttr:payload.newAttr
            });
            if(data.ok > 0)
            {
                commit("deleteItem",payload.index)
            }            
        }
    }
}
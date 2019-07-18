import userApi from "../services/usersServices.js";

export default {
    namespaced:true,
    actions:{
        async signInAsync(context,payload){
            const { data } = await userApi.signIn(payload);
            return data;
        },
        async loginAsync(context,payload){
            const { data } = await userApi.login(payload);
            return data;
        }
    }
}
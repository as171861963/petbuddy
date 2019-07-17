import axios from "axios";

export default {

    async login(params){
        return await axios.get("/users/login",{ params });
    },

    async signIn(params){
        return await axios.post("/users/signIn",params);
    }

}
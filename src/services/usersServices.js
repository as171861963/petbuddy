import axios from "axios";

export default {

    async login(params) {
        return await axios.get("/users/login", { params });
    },

    async signIn(params) {
        return await axios.post("/users/signIn", params);
    },

    async getUserManage(payload) {
        return await axios.get(`/users/userManage`,{
            params:{
                identity:payload
            }
        });
    },

    async changeUserStatus(params) {
        return await axios.put(`/users/${params._id}`, params.newAttr);
    }


}
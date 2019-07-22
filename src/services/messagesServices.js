import axios from "axios";

export default {

    async getMessages(){
        return await axios.get(`/shops/status/unhandled`);
    },

    async changeShopStatus(params){
        return await axios.put(`/shops/${params._id}`,params.newAttr);
    }

}
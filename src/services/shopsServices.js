import axios from "axios";

export default {

    async getShops(params){
        return await axios.get(`/shops/${params}`);
    },

    async changeShopStatus(params){
        return await axios.put(`/shops/${params._id}`,params.newAttr);
    }

}
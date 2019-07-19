import axios from "axios";

export default {

    async getShops(params){
        return await axios.get(`/shops/${params.managerId}`,{ params:params.page });
    }

}
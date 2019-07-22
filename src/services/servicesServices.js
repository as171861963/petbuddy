import axios from "axios";

export default {

    async getShopsByManagerId(params){
        return await axios.get(`/shops/${params}`);
    },

    async addService(params){
        return await axios.post(`/services`,params);
    },

    async getServicesByManagerId(params){
        return await axios.get(`/services/${params}`);
    },

    async deleteServiceById(params){
        return await axios.delete(`/services/${params}`);
    },

    async updateServiceAsync(params){
        return await axios.put(`/services`,params);
    },
}
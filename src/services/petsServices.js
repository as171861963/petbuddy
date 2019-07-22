import axios from "axios";

export default {
    async addToPet(payload) {
        return await axios.post("/pets", payload)
    },
    async searchToPet(payload) {
        return await axios.get("/pets/pet", {
            params: payload
        })
    },
    async updateToPet(payload) {
        return await axios.put("/pets", payload)
    },
    async deleteToPet(payload) {
        return await axios.delete("/pets", {
            params: {
                _id: payload
            }
        })
    },
    async getPets(payload) {
        return await axios.get("/pets", {
            params: payload
        })
    }
}
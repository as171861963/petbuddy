import axios from "axios";

export default {
    async addToFoot(payload) {
        return await axios.post("/foots", payload)
    },
    async searchToFoot(payload) {
        return await axios.get("/foots/foot", {
            params: payload
        })
    },
    async updateToFoot(payload) {
        return await axios.put("/foots", payload)
    },
    async deleteToFoot(payload) {
        return await axios.delete("/foots", {
            params: {
                _id: payload
            }
        })
    },
    async getFoots(payload) {
        return await axios.get("/foots", {
            params: payload
        })
    }
}
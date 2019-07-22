import petsApi from "../services/petsServices";
export default {
    namespaced: true,
    state: {
        start: 0,
        count: 999,
        total: 0,
        rows: []
    },
    mutations: {
        getPets(state, payload) {
            state.rows = payload
        }
    },
    actions: {
        async deleteToPetAsync(context, payload) {
            const { data } = await petsApi.deleteToPet(payload)
        },
        async searchToPetAsync(context, payload) {
            const { data } = await petsApi.searchToPet(payload)
            context.commit("getPets", data)
        },
        async updateToPetAsync(context, payload) {
            const { data } = await petsApi.updateToPet(payload)
        },
        async addToPetAsync(context, payload) {
            const { data } = await petsApi.addToPet(payload)
        },
        async getPetsAsync(context, payload) {
            const { start, count } = context.state
            const { data } = await petsApi.getPets({ start, count, managerId: payload._id, key: payload.key })
            context.commit("getPets", data)
        },
    }
}
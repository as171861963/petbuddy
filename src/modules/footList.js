import footsApi from "../services/footsServices";
export default {
    namespaced: true,
    state: {
        start: 0,
        count: 999,
        total: 0,
        rows: []
    },
    mutations: {
        getFoots(state, payload) {
            state.rows = payload
        }
    },
    actions: {
        async deleteToFootAsync(context, payload) {
            const { data } = await footsApi.deleteToFoot(payload)
        },
        async searchToFootAsync(context, payload) {
            const { data } = await footsApi.searchToFoot(payload)
            context.commit("getFoots", data)
        },
        async updateToFootAsync(context, payload) {
            const { data } = await footsApi.updateToFoot(payload)
        },
        async addToFootAsync(context, payload) {
            const { data } = await footsApi.addToFoot(payload)
        },
        async getFootsAsync(context, payload) {
            const { start, count } = context.state
            const { data } = await footsApi.getFoots({ start, count, managerId: payload._id, key: payload.key })
            context.commit("getFoots", data)
        },
    }
}
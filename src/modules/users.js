import userApi from "../services/usersServices.js";

export default {
    namespaced: true,
    state: {
        rows: []
    },
    mutations: {
        combineRows(state, payload) {
            state.rows = payload;
        },
        deleteItem(state, payload) {
            state.rows.splice(payload, 1);
        }
    },
    actions: {
        async signInAsync(context, payload) {
            const { data } = await userApi.signIn(payload);
            return data;
        },
        async loginAsync(context, payload) {
            const { data } = await userApi.login(payload);
            return data;
        },
        async getUserManageAsync({ commit }, payload) {
            const { data } = await userApi.getUserManage(payload);
            commit("combineRows", data)
        },

        async changeUserStatusAsync({ commit }, payload) {
            const { data } = await userApi.changeUserStatus({
                _id: payload._id,
                newAttr: payload.newAttr
            });
            if (data.ok > 0) {
                commit("deleteItem", payload.index)
            }
        }
    }
}
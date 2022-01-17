/**
 *  全体的に使用するオブジェクトを管理するストアです。
 *  weatherClient: 天気API(クライアントは思い出しやすいように・・・)
 * 
 */

const state = () => ({
    weatherClient: {},
    counter: 0, //public use
});

const getters = {
    weatherClient: (state) => {
        return state.weatherClient;
    },
    counter: (state) => {
        return state.counter;
    },
};

const mutations = {
    setWeatherClient(state, weatherClient) {
        state.weatherClient = weatherClient
    },
};

const actions = {
    setWeatherClient({ commit }, weatherClient) {
        commit('setWeatherClient', weatherClient);
    }
};

export default {
    namespaced : true,
    state      : state,
    getters    : getters,
    actions    : actions,
    mutations  : mutations,
}
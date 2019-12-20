/**https://vuex.vuejs.org/zh/
 * 这里理解的有点错误
 * state: 存储内容
 * mutations: 接收及修改state, 组件里通过this.$store.commit('xx',arg)
 * actions: 组件里通过this.$store.dispatch('xx',arg)执行xx再传递给mutations 函数(一般用来执行异步操作数据请求等,可以不用)
 * getters: 相当于computed,返回想要的内容,而不改变state的内容, 可以通过this.$store.getter.xx获取数据(可以不用)
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types = {
    SET_AUTHENTICATED: 'SET_AUTHENTICATED',
    SET_USER: 'SET_USER'
}

const state = {
    isAuthenticated: false,
    user: {},
    FORM_DATA: []
}

const getters = {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    FORM_DATA: state => state.FORM_DATA
}

const mutations = {
    [types.SET_AUTHENTICATED](state, isAuthenticated) {
        if (isAuthenticated) state.isAuthenticated = isAuthenticated
        else state.isAuthenticated = false
    },
    [types.SET_USER](state, user) {
        if (user) state.user = user
        else state.user = false
    },
    ['FORM_DATA'](state, data) {
        if (data) {
            state.FORM_DATA = data
        }
    }
}

const actions = {
    setAuthenticated: ({ commit }, isAuthenticated) => {
        commit(types.SET_AUTHENTICATED, isAuthenticated)
    },
    setUser: ({ commit }, user) => {
        commit(types.SET_USER, user)
    },
    clearCurrentState: ({ commit }) => {
        commit(types.SET_AUTHENTICATED, false)
        commit(types.SET_USER, null)
    },
    formData({ commit }, data) {
        commit('FORM_DATA', data)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
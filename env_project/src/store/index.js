import { createStore } from 'vuex'
import request from '../http/request'

const state = {
  tabList: [],
  actionList: [],
  actionDetail: {}
}

const mutations = {
  getTabList (state, data) {
    state.tabList = data
  },

  getActionList (state, data) {
    state.actionList = data
  },

  getDetail (state, data) {
    state.actionDetail = data
  }
}


const actions = {
  async getTabList ({ commit }) {
    const data = await request({
      url: '/tab',
      method: 'get'
    })
    commit("getTabList", data)
    return data
  },

  // 获取文章列表
  async getActionList ({ commit }, params) {
    const data = await request({
      url: '/action',
      method: 'get',
      params
    })
    commit("getActionList", data)
    return data
  },

  // 获取文章详情
  async getDetail ({ commit }, params) {
    const data = await request({
      url: '/detail',
      method: 'get',
      params
    })
    commit("getDetail", data)
    return data
  }
}

export default createStore({
  state,
  mutations,
  actions
})

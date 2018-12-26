/*
 * @Author: Brainy 
 * @Date: 2018-12-18 14:20:50 
 * @Last Modified by: Brainy
 * @Last Modified time: 2018-12-18 14:22:27
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    permissionList: []
  },
  mutations: {
    setPermission: (state, list) => {
      state.permissionList = list;
    }
  },
  actions: {
    getPermission: ({
      commit
    }) => {
      //axios请求获取权限列表
      const list = ['home'];
      commit('setPermission', list);
      return Promise.resolve(list);
    }
  }
})
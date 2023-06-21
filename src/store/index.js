import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hasLogin: false, // 是否登录
    userInfo: {}, // 用户信息
  },
  mutations: {
    /**
     * @description: 登录
     * @param {type} state
     * @param {type} provider
     * @return {type}
     */
    login(state, provider) {
      state.hasLogin = true;
      state.userInfo = provider;
      uni.setStorage({//缓存用户登陆状态
        key: `${Config.APP_NAME}_userInfo`,
        data: provider
      })
    },
    /**
     * @description: 退出登录
     * @param {type} state
     * @return {type}
     */
    logout(state) {
      state.hasLogin = false;
      state.userInfo = {};
      uni.removeStorage({
        key: `${Config.APP_NAME}_userInfo`
      })
    },
  },
  actions: {}
})

export default store

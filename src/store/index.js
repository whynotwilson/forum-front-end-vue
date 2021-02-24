import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // 類似 data，只是可以用在全部的 vue 元件
  // 而 data 只能用在自己的元件
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },

  // 類似 fetchRestaurants 功能，向 API 抓取資料
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },

  // 設定其他的非同步函式，例如發送 API 請求等等
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()

        if (statusText === 'error') {
          throw new Error(data)
        }

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      } catch (error) {
        console.error('can not fetch user information')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    }
  },

  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
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

  //改變 state 裡的資料
  mutations: {
    //參數1:傳入上方的 state 物件，準備變更物件內容
    //參數2:接收從 Vue component 傳入的資料，通常會以「想要更新的 state 屬性」來命名這組參數
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser 
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },

  //actions通常都是放非同步的方法，例如發送 API 請求
  //在 actions 中可以透過參數的方式取得 commit 的方法
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        const {data} = await usersAPI.getCurrentUser()
        const {id, name, email, image, isAdmin} = data
        //透過commit操作mutations，以改變state
        commit('setCurrentUser', {
          id, name, email, image, isAdmin,
        })
         return true
      } catch(error) {
        console.log('error', error)
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

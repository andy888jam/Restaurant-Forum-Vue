import { apiHelper } from "./../utils/helpers";


export default {
  //發送 POST 請求時，會夾帶想要新增的資料，因此要注意一下參數設計和 GET 的情境不太一樣
  addFavorite({restaurantId}) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({restaurantId}) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({restaurantId}) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({restaurantId}) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  //只需要驗證該 token 是否有效，並取得登入者的資訊，不需要完整的 user profile 
  getCurrentUser () {
    return apiHelper.get(`/get_current_user`)
  },
  //完整的 user profile 
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({userId}) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
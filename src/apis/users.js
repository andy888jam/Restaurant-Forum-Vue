import { apiHelper } from "./../utils/helpers";
const getToken = () =>localStorage.getItem('token')

export default {
  //發送 POST 請求時，會夾帶想要新增的資料，因此要注意一下參數設計和 GET 的情境不太一樣
  addFavorite({restaurantId}) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  },
  deleteFavorite({restaurantId}) {
    return apiHelper.delete(`/favorite/${restaurantId}`, { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  },
  addLike({restaurantId}) {
    return apiHelper.post(`/like/${restaurantId}`, null, { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  },
  deleteLike({restaurantId}) {
    return apiHelper.delete(`/like/${restaurantId}`, { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  }
}
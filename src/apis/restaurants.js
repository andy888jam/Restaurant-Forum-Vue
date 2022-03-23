import { apiHelper } from "./../utils/helpers";
const getToken = () =>localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    //原生的 URLSearchParams() 方法，幫你把一組物件參數直接組成網址上的 queryString
    const searchParams = new URLSearchParams({page, categoryId})
    //第二個參數是 request 設定，這些設定需要打包成一個物件。在這個物件裡，需要放在 HTTP Header 裡的設定，可以用 headers 屬性來指定
    //再透過 URLSearchParams.toString() 來產生 queryString
    console.log(searchParams.toString())
    return apiHelper.get(`/restaurants?${searchParams.toString()}`,{ headers: {
      Authorization: `Bearer ${getToken()}`}
    }) 
  },
  getRestaurant ({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`,{ headers: {
      Authorization: `Bearer ${getToken()}`}
    }) 
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  },
  addFavorite() {
    return apiHelper.post('/restaurants/top', null, { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  },
  deleteFavorite() {
    return apiHelper.delete('/restaurants/top', { headers: {
      Authorization: `Bearer ${getToken()}`}
    })
  }
}
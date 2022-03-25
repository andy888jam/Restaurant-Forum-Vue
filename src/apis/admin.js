import { apiHelper } from './../utils/helpers'

export default {
  restaurants: {
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    getDetail({restaurantId}) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    delete({restaurantId}) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update({restaurantId, formData}) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`)
    },
  },
  categories: {
    create(data) {
      return apiHelper.post('/admin/categories', {...data})
    },
    get() {
      return apiHelper.get('/admin/categories')
    },
    delete({categoryId}) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    //第二個值物件
    update({categoryId, name}) {
      return apiHelper.put(`/admin/categories/${categoryId}`, {name})
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({userId, isAdmin}) {
      return apiHelper.put(`/admin/users/${userId}`)
    }
  }
}
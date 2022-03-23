import { apiHelper } from "./../utils/helpers";
const getToken = () =>localStorage.getItem('token')

export default {
  create(data) {
    return apiHelper.post('/comments', {...data}, { headers: {Authorization: `Bearer ${getToken()}`}})
  },
  delete({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`, { headers: {Authorization: `Bearer ${getToken()}`}})
  }
}

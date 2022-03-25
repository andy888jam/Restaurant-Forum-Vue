import { apiHelper } from "./../utils/helpers";

export default {
  create(data) {
    return apiHelper.post('/comments', {...data})
  },
  delete({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}

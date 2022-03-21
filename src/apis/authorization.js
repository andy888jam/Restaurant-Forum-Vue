// ./src/apis/authorization.js
import { apiHelper } from "./../utils/helpers";

export default {
  //建立方法
  signIn({email, password}) {
    //return的會是一個promise; 要做 axios.post() 發送請求時，要改寫成 apiHelper.post()
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  //再確認
    signUp (data) {
      return apiHelper.post('/signup', {...data})
    },
}
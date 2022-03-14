<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import authorizationAPI from "./../apis/authorization";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
       // 如果 email 或 password 為空，直接擋住，不向後端發出請求， return 不繼續往後執行
      if (!this.email || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入帳號密碼",
        });
        return
      }
      //向後端發出請求
      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const { data } = response;
          //拋出非狀態碼的錯誤
          if (data.status !== "sucess") {
            throw new Error(data.message);
          }
          //存取token至localStorage
          localStorage.setItem("token", data.token);
          this.$router.push("/restaurants");
        })
        .catch((error) => {
          this.password = "";
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入了正確的帳號密碼",
          });
        });
    },
  },
};
</script>
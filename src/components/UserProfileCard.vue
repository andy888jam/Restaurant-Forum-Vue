<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form
            action="/following/3"
            method="POST"
            style="display: contents"
            v-if="!isCurrentUser"
          >
            <router-link
              class="btn btn-primary"
              :to="{ name: 'user-edit', params: { id: user.id } }"
            >
              edit</router-link
            >
          </form>
          <form
            action="/following/3"
            method="POST"
            style="display: contents"
            v-else
          >
            <button
              type="submit"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(user.id)"
              v-if="isFollowed"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(user.id)"
              v-else
            >
              追蹤
            </button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import usersAPI from "./../apis/users";
import { emptyImageFilter } from "./../utils/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  //非同步方法呼叫 API 時，在拿到後端回應之前，父元件就直接把 initialRestaurant 傳給子元件了，因此子元件沒有拿到 API 資料，故要監聽initialRestaurant的變化
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = true;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤，請稍候再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍候再試",
        });
      }
    },
  },
};
</script>
<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image | emptyImage" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.followerCount }}</span
    >
    <p class="mt-3">
      <button
        type="button"
        v-if="user.isFollowed"
        class="btn btn-danger"
        @click.stop.prevent="deleteFollowing(user.id)"
      >
        取消追蹤
      </button>
      <button
        type="button"
        v-else
        class="btn btn-primary"
        @click.stop.prevent="addFollowing(user.id)"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
          isFollowed: true,
          followerCount: this.user.followerCount + 1,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍候再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
          isFollowed: false,
          followerCount: this.user.followerCount - 1,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>
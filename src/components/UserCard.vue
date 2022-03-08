<template>
  <div class="col-3">
    <router-link :to="{ name: 'user' }">
      <img :src="user.image" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        type="button"
        v-if="user.isFollowed"
        class="btn btn-danger"
        @click.stop.prevent="unfollow"
      >
        取消追蹤
      </button>
      <button
        type="button"
        v-else
        class="btn btn-primary"
        @click.stop.prevent="follow"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
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
    follow() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    unfollow() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>
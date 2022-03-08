<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://via.placeholder.com/300"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form
            action="/following/3"
            method="POST"
            style="display: contents"
            v-if="profile.id === currentUser.id"
          >
            <button type="submit" class="btn btn-primary">edit</button>
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
              @click.stop.prevent="deleteFollowing"
              v-if="isFollowed"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing"
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
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    addFollowing() {
      this.isFollowed = true;
    },
    deleteFollowing() {
      this.isFollowed = false;
    },
  },
};
</script>
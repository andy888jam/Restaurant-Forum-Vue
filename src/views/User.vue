<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :user="user"
          :is-current-user="currentUser.id === user.id"
          :initial-is-followed="isFollowed"
        />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :followings="followings" />
            <br />
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :comments="comments" />
            <br />
            <UserFavoritedRestaurantsCard
              :favorited-restaurants="favoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>





<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import { Toast } from "../utils/helpers";
import usersAPI from "./../apis/users";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        const { profile, isFollowed } = data;
        const {
          id,
          image,
          name,
          email,
          Comments,
          Followers,
          Followings,
          FavoritedRestaurants,
        } = profile;
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };
        this.isFollowed = isFollowed;
        this.followings = Followings;
        this.followers = Followers;
        this.comments = Comments.filter((comment) => comment.Restaurant);
        this.favoritedRestaurants = FavoritedRestaurants;
      } catch (error) {
        console.log(error, "error");
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍候再試",
        });
      }
    },
  },
};
</script>
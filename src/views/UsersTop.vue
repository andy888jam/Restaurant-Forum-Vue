<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <UserCard v-for="user in users" :key="user.id" :initial-user="user" />
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
import Spinner from "./../components/Spinners.vue";

export default {
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  components: {
    NavTabs,
    UserCard,
    Spinner
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
};
</script>
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard v-for="user in users" :key="user.id" :initial-user="user"/>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";

const dummyUser = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$/P/wdaPlDl250CUgKwtLH.FoFlGfxcjiuBzuGrLzcu9yJpSSUsWy6",
      isAdmin: true,
      image: null,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$R2DVPzWfQ2hsSn5snqyc4eEnOO81b.Z4S10I6UDqLBxOjOFGOeRji",
      isAdmin: false,
      image: null,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$XdQ8ClRmBfrajA.IvGzTzOFaBthX1guuIgQgJvifFJipXjQLK55Fa",
      isAdmin: false,
      image: null,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    NavTabs,
    UserCard
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyUser;
      this.users = users;
    },
  },
};
</script>
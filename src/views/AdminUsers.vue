<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-show="user.isAdmin">admin</td>
          <td v-show="!user.isAdmin">user</td>
          <td>
            <div v-if="user.id !== currentUser.id">
              <button
                @click.stop.prevent="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
                type="button"
                class="btn btn-link"
                v-show="user.isAdmin"
              >
                set as user
              </button>
              <button
                @click.stop.prevent="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
                type="button"
                class="btn btn-link"
                v-show="!user.isAdmin"
              >
                set as admin
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import AdminNav from "./../components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import Spinner from "./../components/Spinners.vue";

export default {
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error, "error");
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        console.log(error, "error");
        Toast.fire({
          icon: "error",
          title: "無法切換狀態，請稍後再試",
        });
      }
    },
  },
};
</script>
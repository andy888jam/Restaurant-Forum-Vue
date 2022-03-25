<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
          alt=""
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      id: 0,
      image: "",
      name: "",
      email: "",
      isProcessing: false,
    };
  },
  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    setUser(userId) {
      const { id, image, name, email } = this.currentUser;
      if (userId.toString() !== id.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }
      this.id = id;
      this.name = name;
      this.image = image;
      this.email = email;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.image = "";
        return;
      } else {
        const imgURL = window.URL.createObjectURL(files[0]);
        this.image = imgURL;
      }
    },
    async handleSubmit(e) {
      try {
        //驗證
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }

        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);

        const { data } = await usersAPI.update({
          userId: this.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        console.log(error, "error");
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍候再試",
        });
      }
    },
  },
};
</script>
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      // TODO: 向 API 發送 POST 請求
      try {
        if (!this.text) {
          Toast.fire({
            icon: "warning",
            title: "未填寫任何評論",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 伺服器新增 Comment 成功後...
        this.$emit("after-create-comment", {
          commentId: data.commentId, // 尚未串接 API 暫時使用隨機的 id
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.text = ""; //將表單的資料清空
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "新增評論失敗，請稍候再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
// ./src/views/AdminCategories.vue
<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              @click="handleCancel(category.id)"
              class="cancel"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";
import Spinner from "./../components/Spinners.vue";

export default {
  components: {
    AdminNav,
    Spinner,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isLoading: true,
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 取得類別資料
    // 在每一個 category 中都添加一個 isEditing 屬性
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        //如果函式中要直接return物件，可以省略retrun但是{}外圍要使用（）包住
        this.categories = data.categories.map((category) => ({
          //複製原本內容
          ...category,
          isEditing: false,
          nameCached: "",
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error, "error");
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },

    //新增類別
    async createCategory() {
      try {
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        //將新的類別添加至陣列中渲染
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
        });
        this.newCategoryName = "";
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "創建類別失敗，請稍後再試",
        });
      }
    },

    //刪除類別
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "刪除類別失敗，請稍候再試",
        });
      }
    },

    //更新編輯
    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ categoryId, name });
        // TODO: 透過 API 去向伺服器更新餐廳類別名稱
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳類別，請稍候再試",
        });
      }
    },

    //取消編輯
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },

    //編輯狀態切換
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            //先把當前類別名稱暫存至另一變數
            nameCached: category.name,
            isEditing: !category.isEditing,
          };
        }
        return category;
      });
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
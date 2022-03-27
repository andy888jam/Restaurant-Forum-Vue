<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <Spinner v-if="isLoading" />
    <template v-else>
      <RestaurantsNavPills :categories="categories" />
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestarantsPagination
        v-if="totalPage > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
      />
      <div v-if="restaurants.length < 1">
        此類別目前無餐廳資料
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import Spinner from "./../components/Spinners.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestarantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true,
    };
  },
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestarantsPagination,
    Spinner,
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to, from, next) {
    //不賦予空值的話會預設undefine就拉不回資料
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    //next表示繼續往下
    next();
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        //解構賦值
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;
        // 將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍候再試",
        });
      }
    },
  },
};
</script>
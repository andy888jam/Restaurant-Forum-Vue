<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
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
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestarantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Whitney Kreiger III",
      tel: "(960) 053-2333",
      address: "27059 Padberg Estate",
      opening_hours: "08:00",
      description: "atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.25370848405821",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Luella Vandervort",
      tel: "1-323-694-6274 x83283",
      address: "517 Rasheed Plaza",
      opening_hours: "08:00",
      description: "Distinctio sint voluptates perspiciatis rerum eaqu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.4080966813458",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Tressie Jakubowski",
      tel: "(725) 558-1659",
      address: "817 Alfred Bridge",
      opening_hours: "08:00",
      description: "culpa cum eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.6113196897054",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Shanie Kerluke",
      tel: "(063) 355-8159",
      address: "519 Hank Islands",
      opening_hours: "08:00",
      description: "dicta consequatur in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.6838604228705",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Sonya Schuppe",
      tel: "(231) 448-7025 x416",
      address: "0516 Parisian Spurs",
      opening_hours: "08:00",
      description: "corrupti velit pariatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.732834534256924",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Cornelius Klocko",
      tel: "(886) 281-1351 x9054",
      address: "940 Frami Canyon",
      opening_hours: "08:00",
      description: "dolores quis omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.30120666619766",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Margaret Leannon III",
      tel: "519-565-3972 x70443",
      address: "77419 Reichert Park",
      opening_hours: "08:00",
      description: "Aut aperiam qui quo.\nInventore quia ullam adipisci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.32509263101944",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Lilly Boyer",
      tel: "318.065.6782 x502",
      address: "534 Kris Mission",
      opening_hours: "08:00",
      description: "Voluptatem mollitia est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.57695748512124",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Mrs. Adrianna Botsford",
      tel: "253-201-1504",
      address: "705 Broderick Lock",
      opening_hours: "08:00",
      description: "Fuga deserunt voluptatem ex culpa incidunt sapient",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.92530051772955",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Verner Haag III",
      tel: "609-142-7630 x028",
      address: "57624 Ferry Crescent",
      opening_hours: "08:00",
      description: "Et eius qui quam. Ipsa blanditiis earum in tempori",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.560855911253704",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
    },
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: "",
};
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
    };
  },
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestarantsPagination,
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      //解構賦值
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
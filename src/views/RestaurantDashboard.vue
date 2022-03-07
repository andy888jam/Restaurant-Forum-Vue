<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        id: 1,
        name: "Whitney Kreiger III",
        tel: "(960) 053-2333",
        address: "27059 Padberg Estate",
        opening_hours: "08:00",
        description: "atque",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=46.25370848405821",
        viewCounts: 1,
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-12T15:11:24.000Z",
        CategoryId: 1,
        Category: {
          id: 1,
          name: "中式料理",
          createdAt: "2022-02-04T07:34:41.000Z",
          updatedAt: "2022-02-04T07:34:41.000Z",
        },
        Comments: [
          {
            id: 1,
            text: "Vel neque debitis et alias eveniet.",
            UserId: 2,
            RestaurantId: 1,
            createdAt: "2022-02-04T07:34:41.000Z",
            updatedAt: "2022-02-04T07:34:41.000Z",
            User: {
              id: 2,
              name: "user1",
              email: "user1@example.com",
              password:
                "$2a$10$R2DVPzWfQ2hsSn5snqyc4eEnOO81b.Z4S10I6UDqLBxOjOFGOeRji",
              isAdmin: false,
              image: null,
              createdAt: "2022-02-04T07:34:41.000Z",
              updatedAt: "2022-02-04T07:34:41.000Z",
            },
          },
          {
            id: 51,
            text: "In ea aperiam praesentium eum a.",
            UserId: 3,
            RestaurantId: 1,
            createdAt: "2022-02-04T07:34:41.000Z",
            updatedAt: "2022-02-04T07:34:41.000Z",
            User: {
              id: 3,
              name: "user2",
              email: "user2@example.com",
              password:
                "$2a$10$XdQ8ClRmBfrajA.IvGzTzOFaBthX1guuIgQgJvifFJipXjQLK55Fa",
              isAdmin: false,
              image: null,
              createdAt: "2022-02-04T07:34:41.000Z",
              updatedAt: "2022-02-04T07:34:41.000Z",
            },
          },
          {
            id: 101,
            text: "Unde est nisi fuga.",
            UserId: 2,
            RestaurantId: 1,
            createdAt: "2022-02-04T07:34:41.000Z",
            updatedAt: "2022-02-04T07:34:41.000Z",
            User: {
              id: 2,
              name: "user1",
              email: "user1@example.com",
              password:
                "$2a$10$R2DVPzWfQ2hsSn5snqyc4eEnOO81b.Z4S10I6UDqLBxOjOFGOeRji",
              isAdmin: false,
              image: null,
              createdAt: "2022-02-04T07:34:41.000Z",
              updatedAt: "2022-02-04T07:34:41.000Z",
            },
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants" :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{name:'restaurant', params:{id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from "./../utils/mixins";
const dummyData = {
  "restaurants": [
        {
            "id": 50,
            "name": "Ned Spinka",
            "tel": "(324) 673-3716 x69533",
            "address": "42353 Marvin Mission",
            "opening_hours": "08:00",
            "description": "Officia sunt sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.4517455871850604",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Madge Hammes",
            "tel": "1-164-166-8518 x026",
            "address": "206 Kerluke Station",
            "opening_hours": "08:00",
            "description": "culpa",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.54420154302466",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Maryjane Parisian II",
            "tel": "411.758.6007 x3507",
            "address": "911 Bessie Green",
            "opening_hours": "08:00",
            "description": "quas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.283280221069184",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Eve Auer",
            "tel": "059-023-4549 x0183",
            "address": "420 Chet Harbor",
            "opening_hours": "08:00",
            "description": "Sequi est vitae sint qui dolores illo doloremque e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.77850731576547",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Idell Bergnaum",
            "tel": "596-301-6192 x5830",
            "address": "9918 Noah Track",
            "opening_hours": "08:00",
            "description": "asperiores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.41891329019436",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Derek Green",
            "tel": "1-867-709-3735 x483",
            "address": "9720 Talon Lakes",
            "opening_hours": "08:00",
            "description": "quia aliquid ducimus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.91910865210382",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Kim Williamson",
            "tel": "160.908.2713 x88744",
            "address": "473 Clemmie Square",
            "opening_hours": "08:00",
            "description": "aliquid consequatur non",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.398685598127157",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Oren Jacobs",
            "tel": "966.776.9775",
            "address": "781 Kautzer Junctions",
            "opening_hours": "08:00",
            "description": "Eum ut assumenda id nihil tempore dolore. Necessit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.3329668432273",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Mr. Rico Skiles",
            "tel": "(669) 688-7506 x62712",
            "address": "8594 Roberts Mission",
            "opening_hours": "08:00",
            "description": "in",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.4119937255598",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Alford Zemlak I",
            "tel": "495.258.7511",
            "address": "13107 Pacocha Roads",
            "opening_hours": "08:00",
            "description": "modi tempore harum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.114932831713155",
            "viewCounts": 0,
            "createdAt": "2022-02-04T07:34:41.000Z",
            "updatedAt": "2022-02-04T07:34:41.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}
export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurants: [],
    }
  },
  components: {
    NavTabs
  },
  created() {
    this.fetchTop()
  },
  methods: {
    fetchTop() {
      const {
        restaurants
      } = dummyData
      this.restaurants = restaurants
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if(restaurant.id !== restaurantId) {
          return restaurant
        }
        return {
          ...restaurant,
          isFavorited: false,
          FavoriteCount: restaurant.FavoriteCount - 1,
        }
      })
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if(restaurant.id !== restaurantId) {
          return restaurant
        }
        return {
          ...restaurant,
          isFavorited: true,
          FavoriteCount: restaurant.FavoriteCount + 1,
        }
      })
    }
  }
}
</script>
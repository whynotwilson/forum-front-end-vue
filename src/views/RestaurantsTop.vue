<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>

    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }} </span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id }}"
              class="btn btn-primary mr-2"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="updateFavorite(false, restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="updateFavorite(true, restaurant.id)"
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

const dummyData = {
  restaurants: [
        {
            "id": 50,
            "name": "Salma Brakus",
            "tel": "1-956-081-8578",
            "address": "9010 Wyman Ville",
            "opening_hours": "08:00",
            "description": "Beatae eveniet ipsam qui exercitationem voluptas e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.976228570867654",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": true,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Dusty Braun III",
            "tel": "1-612-520-7672 x5463",
            "address": "87500 Sauer Extensions",
            "opening_hours": "08:00",
            "description": "Itaque enim impedit sit quia qui. Illo ducimus ut ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.91485585398897",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Juvenal Hamill",
            "tel": "(486) 632-5203 x04197",
            "address": "3512 Freeda Square",
            "opening_hours": "08:00",
            "description": "Dolorem id autem iste repudiandae sit quod et qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.48630048388245",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Vita Sipes",
            "tel": "378-032-0745 x5388",
            "address": "0724 Ted Falls",
            "opening_hours": "08:00",
            "description": "esse rem voluptate",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.921570039582143",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Anna Ratke",
            "tel": "1-716-331-3739",
            "address": "211 Florian Gardens",
            "opening_hours": "08:00",
            "description": "Unde voluptatem qui enim et qui eos. Voluptatem qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.37648993669164",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Dimitri Douglas",
            "tel": "765.538.4685 x57532",
            "address": "98451 Toy Freeway",
            "opening_hours": "08:00",
            "description": "Temporibus sed ut commodi aliquam quasi sapiente o",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.919562837836275",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Cassandre Abbott DDS",
            "tel": "(819) 601-0054",
            "address": "37385 Sauer Dam",
            "opening_hours": "08:00",
            "description": "perspiciatis ut similique",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.19390696811767",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Kurt Marvin",
            "tel": "956.746.9056",
            "address": "867 Brady Points",
            "opening_hours": "08:00",
            "description": "Voluptatem repellendus nobis aut est voluptatem po",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.37465175786385",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Eula Cummings",
            "tel": "1-621-146-6643",
            "address": "2459 Reese Stream",
            "opening_hours": "08:00",
            "description": "Quia quia nam sit quo expedita amet quaerat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.37289476330022",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Jefferey Wiegand",
            "tel": "1-966-604-8029 x91598",
            "address": "53319 Stanford Ranch",
            "opening_hours": "08:00",
            "description": "consectetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.542019714143436",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    updateFavorite (boolean, restaurantId) {
      let restaurantIndex = this.restaurants.findIndex(restaurant => restaurant.id === restaurantId)
      this.restaurants[restaurantIndex].isFavorited = boolean
    },
  }
}
</script>
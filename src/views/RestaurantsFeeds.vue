<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :restaurants="restaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'

const dummyData = {
  restaurants: [
    {
        "id": 1,
        "name": "Mrs. Juwan Welch",
        "tel": "(233) 242-4386 x819",
        "address": "10233 Feeney Harbor",
        "opening_hours": "08:00",
        "description": "officia",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.0300625536925",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 2,
        "name": "Dr. Ofelia Watsica",
        "tel": "071-357-4190",
        "address": "6687 Friesen Burgs",
        "opening_hours": "08:00",
        "description": "Dicta eius ex sapiente dolore eligendi amet. Aut r",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.097986425245054",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 3,
        "name": "Ines Connelly",
        "tel": "373-712-6567 x5037",
        "address": "973 Nikolaus Junctions",
        "opening_hours": "08:00",
        "description": "sed delectus similique",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.233721686881346",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 4,
        "name": "Lyric Crona",
        "tel": "370.410.2215 x34493",
        "address": "595 Jaylen Lakes",
        "opening_hours": "08:00",
        "description": "eligendi",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.98758865283556",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 5,
        "name": "Cletus Ritchie",
        "tel": "616.071.9948 x347",
        "address": "54853 Layla Centers",
        "opening_hours": "08:00",
        "description": "Autem sunt molestiae quo repellat est ea enim quo ",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.458534420595154",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 6,
        "name": "Alvera Walter",
        "tel": "(321) 551-5612",
        "address": "00761 Clay Motorway",
        "opening_hours": "08:00",
        "description": "Et alias soluta omnis placeat. Quas nemo nihil acc",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.01152585498092",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 7,
        "name": "Jaquan Prosacco",
        "tel": "(263) 879-9510 x10625",
        "address": "181 Hilpert Harbor",
        "opening_hours": "08:00",
        "description": "Ullam incidunt molestias. Facere quia doloribus mo",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.34270380158523",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 8,
        "name": "Raleigh Schmidt",
        "tel": "467.993.0342",
        "address": "61213 Morar Springs",
        "opening_hours": "08:00",
        "description": "harum",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.016377935837646",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 9,
        "name": "Ernie Halvorson",
        "tel": "801.770.2489 x358",
        "address": "033 Gregorio Forest",
        "opening_hours": "08:00",
        "description": "Possimus necessitatibus omnis pariatur et veritati",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.6861869700708576",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 10,
        "name": "Cassandra King",
        "tel": "321.512.6894 x25508",
        "address": "76863 Angelica Villages",
        "opening_hours": "08:00",
        "description": "Aperiam quaerat odio eum.\nEos quo in consequatur s",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.49966440878254",
        "viewCounts": 0,
        "createdAt": "2021-01-25T05:34:56.000Z",
        "updatedAt": "2021-01-25T05:34:56.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    }
  ],
  categories: [
      {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 2,
          "name": "日本料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2021-01-25T05:34:56.000Z",
          "updatedAt": "2021-01-25T05:34:56.000Z"
      }
  ],
  categoryId: "",
  page: 1,
  totalPage: [
    1,
    2,
    3,
    4,
    5
  ],
  prev: 1,
  next: 2
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds ()  {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>
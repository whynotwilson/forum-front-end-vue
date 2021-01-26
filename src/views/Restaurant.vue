<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments"

const dummyData = {
  restaurant: {
    id: 1,
    name: "Graciela Schinner",
    tel: "039.312.8203",
    address: "4944 Corwin Prairie",
    opening_hours: "08:00",
    description:
      "Ex maiores omnis necessitatibus dolores sunt quibusdam. Voluptatem optio aut autem corrupti. Aperiam alias magnam molestiae laboriosam. Maxime sunt quaerat hic fuga beatae sed ad enim.\n \rAccusantium et incidunt consectetur omnis fugit beatae eos in. Est aliquid repellendus qui est expedita sequi atque. Modi consectetur quia sunt molestiae aut.\n \rQuia omnis eos veritatis. Optio animi neque velit nobis et quibusdam quasi esse sint. Nostrum sit quia nesciunt voluptatem consequatur non ut quis. Odio voluptatibus iusto vitae deserunt ab rerum unde. Deleniti sequi qui et neque est quia.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=53.40956699833694",
    viewCounts: 1,
    createdAt: "2021-01-25T15:50:18.000Z",
    updatedAt: "2021-01-25T15:54:37.501Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-01-25T15:50:18.000Z",
      updatedAt: "2021-01-25T15:50:18.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 51,
        text: "Assumenda laborum velit repellat totam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-01-25T15:50:18.000Z",
        updatedAt: "2021-01-25T15:50:18.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$9dHkLxWg./Y6W6zEtgsyNOA4VT3EcB7bSQNcQ59SBmNZGhT9cwPTq",
          isAdmin: true,
          image: null,
          createdAt: "2021-01-25T15:50:17.000Z",
          updatedAt: "2021-01-25T15:50:17.000Z",
        },
      },
      {
        id: 1,
        text:
          "Dicta cupiditate non cumque et assumenda eius similique tempore et.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-01-25T15:50:18.000Z",
        updatedAt: "2021-01-25T15:50:18.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$vgKGf5tTlrfFq2Le6yMBwOU1QGgtHl/bLnPSTeX88PQzhFqIOurX2",
          isAdmin: false,
          image: null,
          createdAt: "2021-01-25T15:50:18.000Z",
          updatedAt: "2021-01-25T15:50:18.000Z",
        },
      },
      {
        id: 101,
        text: "A quos est consectetur vel quis natus exercitationem dolor.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-01-25T15:50:18.000Z",
        updatedAt: "2021-01-25T15:50:18.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$vgKGf5tTlrfFq2Le6yMBwOU1QGgtHl/bLnPSTeX88PQzhFqIOurX2",
          isAdmin: false,
          image: null,
          createdAt: "2021-01-25T15:50:18.000Z",
          updatedAt: "2021-01-25T15:50:18.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    }
  },
};
</script>
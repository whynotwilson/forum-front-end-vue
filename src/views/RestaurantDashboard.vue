<template>
  <div class="container py-5">
    <div>
      <h1 />
      {{ restaurant.name }}
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li />
      評論數：
      {{
        restaurant.Comments.length
      }}
      <li />
      瀏覽次數：
      {{
        restaurant.viewCounts
      }}
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
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
    updatedAt: "2021-01-25T15:54:37.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-01-25T15:50:18.000Z",
      updatedAt: "2021-01-25T15:50:18.000Z",
    },
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
};
export default {
  data() {
    return {
      restaurant: dummyData.restaurant,
    };
  },
};
</script>
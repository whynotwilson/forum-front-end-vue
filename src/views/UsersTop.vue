<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <FoodGuru v-for="user in usersTop" :key="user.id" :food-guru="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import FoodGuru from "./../components/FoodGuru";

const dummyData = {
  usersTop: [
    {
      id: 1,
      name: "foodGuru1",
      email: "root@example.com",
      password: "$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm",
      isAdmin: true,
      image: "https://i.imgur.com/3keAGHT.jpeg",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-14T16:20:50.000Z",
      Followers: [
        {
          id: 1,
          name: "roo00t",
          email: "root@example.com",
          password:
            "$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm",
          isAdmin: true,
          image: "https://i.imgur.com/3keAGHT.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-14T16:20:50.000Z",
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2021-01-05T17:22:26.000Z",
            updatedAt: "2021-01-05T17:22:26.000Z",
          },
        },
        {
          id: 2,
          name: "name2",
          email: "user1@example.com",
          password:
            "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
          isAdmin: false,
          image: "https://i.imgur.com/PhcKzNf.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-15T17:07:09.000Z",
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: "2021-01-12T19:03:03.000Z",
            updatedAt: "2021-01-12T19:03:03.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 2,
      name: "foodGuru2",
      email: "user1@example.com",
      password: "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
      isAdmin: false,
      image: "https://i.imgur.com/PhcKzNf.jpeg",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-15T17:07:09.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "foodGuru3",
      email: "user2@example.com",
      password: "$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q",
      isAdmin: false,
      image: null,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
          isAdmin: false,
          image: "https://i.imgur.com/PhcKzNf.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-15T17:07:09.000Z",
          Followship: {
            followerId: 2,
            followingId: 3,
            createdAt: "2020-12-13T03:37:29.000Z",
            updatedAt: "2020-12-13T03:37:29.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    FoodGuru,
  },

  data() {
    return {
      usersTop: [],
    };
  },

  created() {
    this.fetchFoodGuru();
  },

  methods: {
    fetchFoodGuru() {
      this.usersTop = dummyData.usersTop;
    },
  },
};
</script>
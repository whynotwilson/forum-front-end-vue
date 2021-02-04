<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in usersTop" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <router-link
          :to="{
            name: 'user-profile',
            params: {
              id: user.id,
            },
          }"
        >
          <h2>{{ user.name }}</h2>
        </router-link>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
            v-else
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
  },

  data() {
    return {
      usersTop: [],
    };
  },

  created() {
    this.fetchTopUsers();
  },

  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        // console.log(data);
        this.usersTop = data.users;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },

    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.usersTop = this.usersTop.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              FollowerCount: user.FollowerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },

    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.usersTop = this.usersTop.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              FollowerCount: user.FollowerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>
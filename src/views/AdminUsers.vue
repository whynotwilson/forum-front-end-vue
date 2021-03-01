<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td v-if="isCurrentUserIsAdmin">
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin && user.id !== currentUser.id"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else-if="!user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
          <td v-else>
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    AdminNav,
    Spinner,
  },

  data() {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
      isLoading: true,
    };
  },

  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data.users.map((user) => ({
          ...user,
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得所有 user 資料，請稍候再試",
        });
      }
    },

    async toggleUserRole(userId) {
      try {
        const { data } = await adminAPI.users.update({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }

          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更改 user 資料，請稍候再試",
        });
      }
    },
  },

  created() {
    this.fetchUsers();
    this.fetchCurrentUser();
  },

  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
    isCurrentUserIsAdmin() {
      if (this.currentUser.isAdmin) {
        return this.currentUser.id;
      }

      return false;
    },
  },
};
</script>
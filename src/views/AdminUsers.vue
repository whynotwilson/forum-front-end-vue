<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
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

const dummyUsers = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$9dHkLxWg./Y6W6zEtgsyNOA4VT3EcB7bSQNcQ59SBmNZGhT9cwPTq",
      isAdmin: true,
      image: null,
      createdAt: "2021-01-25T15:50:17.000Z",
      updatedAt: "2021-01-25T15:50:17.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$vgKGf5tTlrfFq2Le6yMBwOU1QGgtHl/bLnPSTeX88PQzhFqIOurX2",
      isAdmin: false,
      image: null,
      createdAt: "2021-01-25T15:50:18.000Z",
      updatedAt: "2021-01-25T15:50:18.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$P01PzPO25NKWOudhZkQLT.HLDpVrvn2x9BaMReFQRfsYiF78j6qfK",
      isAdmin: false,
      image: null,
      createdAt: "2021-01-25T15:50:18.000Z",
      updatedAt: "2021-01-25T15:50:18.000Z",
    },
  ],

  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    AdminNav,
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
    };
  },

  methods: {
    fetchUsers() {
      this.users = dummyUsers.users.map((user) => ({
        ...user,
      }));
    },

    fetchCurrentUser() {
      this.currentUser = dummyUsers.currentUser;
    },

    toggleUserRole(userId) {
      // 向 API 請求更改 user admin 完成後

      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    },
  },

  created() {
    this.fetchUsers();
    this.fetchCurrentUser();
  },

  computed: {
    isCurrentUserIsAdmin() {
      if (this.currentUser.isAdmin) {
        return this.currentUser.id;
      }

      return false;
    },
  },
};
</script>
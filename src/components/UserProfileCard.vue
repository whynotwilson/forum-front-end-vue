<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="userProfile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ userProfile.name }}</h5>
        <p class="card-text">{{ userProfile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ commentRestaurantCount }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ userProfile.FavoritedRestaurants.length }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong> {{ userProfile.Followings.length }} </strong> followings
            (追蹤者)
          </li>
          <li>
            <strong> {{ userProfile.Followers.length }} </strong> followers
            (追隨者)
          </li>
        </ul>
        <div>
          <router-link
            v-if="userProfile.id === currentUser.id"
            :to="{ name: 'user-edit', params: { id: currentUser.id }}"
            class="btn btn-primary"
          >
            Edit
          </router-link>
          <button 
            type="submit" 
            class="btn btn-primary" 
            v-else-if="!isFollowed"
            @click.stop.prevent="addFollowing"
            >追蹤
          </button>
          <form
            v-if="userProfile.id !== currentUser.id & isFollowed"
            @submit.stop.prevent="deteleFollowing"
            action="/following/1?_method=DELETE"
            method="POST"
            style="display: contents"
          >
            <button type="submit" class="btn btn-danger">取消追蹤</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 2,
    name: 'user1',
    email: 'user1@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: false
  },
  isAuthenticated: true
}

export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false,
      },
      isAuthenticated: false
    }
  },
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    // 已評論的餐廳數量，評論同一間餐廳算一間
    commentRestaurantCount() {
      let result = new Set(
        this.userProfile.Comments.map((comment) => comment.Restaurant.id)
      );
      return result.size;
    },
  },
  methods: {
    fetchCurrentUser () {
      this.currentUser = {
        ...dummyUser.currentUser,
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    },
    addFollowing() {
      // TODO: 向 API 發送 POST 請求
      // 伺服器新增 Following 成功後...
      this.$emit('after-add-following', {
        Followship:'',
        createdAt:"2019-07-30T16:24:55.204Z",
        email: this.currentUser.email,
        id: this.currentUser.id,
        image: this.currentUser.image,
        isAdmin:false,
        name: this.currentUser.name,
        password:"$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
        updatedAt:'f'
      })
    },
    deteleFollowing() {
      // TODO: 向 API 發送 POST 請求
      // 伺服器刪除 Following 成功後...
      this.$emit('after-delete-following', this.currentUser.id)
    }
  },
  created() {
    this.fetchCurrentUser()
  }
};
</script>
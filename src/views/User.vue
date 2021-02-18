<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!-- UserProfileCard -->
        <UserProfileCard
          :user-profile="userProfile"
          :is-followed="isFollowed"
          @after-add-following="afterAddFollowing"
          @after-delete-following="deteleFollowing"
        />
      </div>

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->

          <!-- UserFollowersCard -->
        </div>

        <div class="col-md-8">
          <!-- UserCommentsCard -->

          <!-- UserFavoritedRestaurantsCard -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserProfileCard from "./../components/UserProfileCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    UserProfileCard,
  },

  data() {
    return {
      userProfile: {},
      isFollowed: false,
    };
  },

  created() {
    const userId = this.$route.params.id;
    this.fetchUser(userId);
  },

  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        this.userProfile = data.profile;
        this.isFollowed = data.isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得用戶資料，請稍後再試",
        });
      }
    },

    afterAddFollowing(payload) {
      let currentUser = {
        ...payload,
      };
      this.userProfile.Followers.push(currentUser);
      this.isFollowed = true;
    },

    deteleFollowing(currentUserId) {
      this.userProfile.Followers = this.userProfile.Followers.filter(
        (Follower) => Follower.id !== currentUserId
      );
      this.isFollowed = false;
    },
  },

  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
};
</script>
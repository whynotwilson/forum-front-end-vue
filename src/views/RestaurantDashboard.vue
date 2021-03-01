<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1 />
        {{ restaurant.name }}
        <span class="badge badge-secondary mt-1 mb-3">{{
          restaurant.categoryName
        }}</span>
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
    </template>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/helpers";

export default {
  components: { Spinner },
  data() {
    return {
      restaurant: {},
      isLoading: true,
    };
  },

  created() {
    this.fetchRestaurant();
  },

  methods: {
    async fetchRestaurant() {
      try {
        const restaurantId = this.$route.params.id;
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        this.restaurant = data.restaurant;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>
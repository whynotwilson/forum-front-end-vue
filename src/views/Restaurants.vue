<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />

      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner,
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1,
      isLoading: true,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },

  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },

  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const {
          categories,
          categoryId,
          next,
          page,
          prev,
          restaurants,
          totalPage,
        } = response.data;

        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.restaurants = restaurants;
        this.totalPage = totalPage.length;
        this.prev = prev;
        this.next = next;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "伺服器繁忙，請稍候再試",
        });
      }
    },
  },
};
</script>
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>

      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import uuid from "uuid/dist/v4";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      text: "",
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async handleSubmit() {
      try {
        // TODO: 向 API 發送 POST 請求
        const { data } = await restaurantsAPI.createComment({
          userId: this.currentUser.id,
          restaurantId: this.restaurantId,
          text: this.text,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        const { commentId } = data;

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        // 伺服器新增 Comment 成功後...
        this.$emit("after-create-comment", {
          commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });

        // 將表單內的資料清空
        this.text = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍候再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
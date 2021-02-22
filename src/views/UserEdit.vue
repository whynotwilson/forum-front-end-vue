<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="userData.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="userData.image"
          :src="userData.image"
          alt="userData"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "處理中..." : "送出" }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userData: {
        name: "",
        image: "",
      },
      isProcessing: false,
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },

  watch: {
    currentUser: function (newValue, oldValue) {
      console.log("oldValue", oldValue);
      console.log("newValue", newValue);
      if (newValue.id !== this.$route.params.id) {
        this.$router.push({ name: "not-found" });
      } else {
        this.setUser(newValue.id);
      }
    },
  },

  methods: {
    setUser(userId) {
      console.log("userId", userId);
      const userData = this.currentUser;
      this.userData = {
        ...userData,
        name: userData.name,
        image: userData.image,
      };
    },

    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.userData.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.userData.image = imageURL;
      }
    },

    async handleSubmit(e) {
      try {
        if (!this.userData.name) {
          Toast.fire({
            icon: "error",
            title: "請輸入姓名",
          });
          return;
        }
        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);

        //透過 API 將表單資料送到伺服器
        const { data } = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "資料更新成功",
        });

        this.$router.push({ name: "user-profile" });

        for (let [name, value] of formData.entries()) {
          console.log(name + ": " + value);
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
  },
};
</script>
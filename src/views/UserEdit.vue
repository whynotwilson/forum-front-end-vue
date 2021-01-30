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
        >
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
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  userData: {
    name: 'user_TEST',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
  }
}

export default {
  data () {
    return {
      userData: {
        name: '',
        image: ''
      }
    }
  },

  created () {
    const { id } = this.$route.params
    this.fetchUserData(id)
  },

  methods: {
    fetchUserData (userId) {
      console.log('userId', userId)
      const { userData } = dummyUser
      this.userData = {
        ...userData,
        name: userData.name,
        image: userData.image
      }
    },
    
    handleFileChange (e) {
      const { files } = e.target
      if (files.length === 0) {
        this.userData.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.userData.image = imageURL
      }
    },

    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)

      // TO DO: 透過 API 將表單資料送到伺服器

      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
  }
}
</script>
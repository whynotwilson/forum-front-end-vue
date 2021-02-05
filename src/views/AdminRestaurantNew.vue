<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },

  data () {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
      isProcessing: false
    }
  },

  methods: {
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        // 透過 API 將表單資料送到伺服器
        const { data } = await adminAPI.restaurants.create({ formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳，請稍候再試'
        })
      }
    }
  }
}
</script>
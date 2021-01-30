<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'

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
      categories: []
    }
  }
}
</script>
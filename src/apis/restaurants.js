import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },

  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },

  getTop() {
    return apiHelper.get('/restaurants/top')
  },

  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },

  deleteComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },

  createComment({ userId, restaurantId, text }) {
    return apiHelper.post(`/comments`, { userId, restaurantId, text })
  },
}

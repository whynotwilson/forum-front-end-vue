import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getTop() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  deleteComment({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  createComment({ userId, restaurantId, text }) {
    return apiHelper.post(`/comments`, { userId, restaurantId, text }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}

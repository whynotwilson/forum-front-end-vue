<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div>
        <h4>
          <a href="#">
            Sandrine Kilback
          </a>
        </h4>
        <p>At reiciendis eaque hic excepturi ratione officiis ad ut minus.</p>by
        <a href="#">
          root
        </a>
        at 3 days ago
        <hr>
      </div>

      <div>
        <h4>
          <a href="#">
            Golden Hegmann
          </a>
        </h4>
        <p>Commodi a totam.</p>by
        <a href="#">
          user1
        </a>
        at 3 days ago
        <hr>
      </div>

      <div>
        <h4>
          <a href="#">
            Trent Hilpert
          </a>
        </h4>
        <p>Ipsa nulla qui.\nOptio labore voluptatem in quam laborum et.</p>by
        <a href="#">
          user1
        </a>
        at 3 days ago
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>
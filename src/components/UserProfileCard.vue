<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        src="https://i.imgur.com/3keAGHT.jpeg"
        width="300px"
        height="300px"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">roo00t</h5>
        <p class="card-text">root@example.com</p>
        <ul class="list-unstyled list-inline">
          <li><strong>24</strong> 已評論餐廳</li>
          <li><strong>6</strong> 收藏的餐廳</li>
          <li><strong>2</strong> followings (追蹤者)</li>
          <li><strong>2</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <form
          action="/following/1?_method=DELETE"
          method="POST"
          style="display: contents"
        >
          <button type="submit" class="btn btn-danger">取消追蹤</button>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>
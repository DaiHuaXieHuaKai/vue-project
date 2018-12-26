<template>
  <div class="error-container">
    <div class="content">
      <h1>{{title}}</h1>
      <h3>未找到该页面...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exception",
  data() {
    return {
      title: "404"
    };
  },
  methods: {}
};
</script>

<style scoped lang='less'>
.error-container {
  position: relative;
  width: 100%;
  height: 100vh;
  .content {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      margin: 0;
      font-size: 7rem;
      letter-spacing: 30px;
    }
    h3 {
      font-size: 2rem;
    }
  }
}
</style>

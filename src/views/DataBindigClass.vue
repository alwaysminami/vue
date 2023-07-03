<template>
  <div class="container" v-bind:class="{
    'active': isActive, 'text-red':hasError
  }">Class Binding</div>
  <!--  배열을 사용한 클래스 바인딩. 배열을 사용하는 경우 특정 조건에 따른 클래스 바인딩 처리를 true/false로 할 수 없음
  <div class="container" v-bind:class="[
    activeClass, errorClass
  ]">Class Binding</div>
   -->
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false
      // activeClass: 'active'
      // errorClass: 'text-red'
    }
  }
}
</script>

<style scoped>
  container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>

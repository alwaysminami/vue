<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
  <!-- 이하 child, parent에 대해선 https://github.com/seungwongo/vue-project/tree/master/src/views 를 참조 -->
</template>
<script>
export default {
  methods: {
    childFunc () {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>
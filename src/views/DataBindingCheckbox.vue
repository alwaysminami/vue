<template>
  <div>
    <label>
      <input type="checkbox" v-model="checked"> {{ checked }}
      <!-- <input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{  checked }} </label }} -->
      <!-- 체크가 되었을 시, 해제 되었을 시에 대한 기본 값의 설정 -->
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<template>
  <!--
    computed 는 데이터 값에 변경이 일어나면, 변경 될 때 마다 정의된 함수를 실행
    아래의 예시는 성과 이름을 받아 풀네임으로 출력하는 코드
    함수명인 fullMame은 함수이자 동시에 Vue 인스턴스의 데이터 키 값

    computed에 정의된 fullName을 여러 곳에서 사용하더라도 이에 대한 연산은 한 번
  -->
  <h1>Full Name : {{ fullName }}</h1>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Mabi',
      lastName: 'nogi'
    }
  },
  computed: {
    fullName () {
      return this.firstName + '' + this.lastName;
    }
  }
}
</script>
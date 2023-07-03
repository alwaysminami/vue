<template>
  <div>
    <!--
      첫 실행 시에는 fullName이 표시되지 않음.
      watch는 데이터를 감시하며, 초기 할당 값이 반드시 변경이 일어나야만 watch가 실행되기 때문
    -->
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Mabi',
      lastName: 'nogi',
      fullName: ''
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + '' + this.lastName;
    },
    lastName () {
      this.fullName = this.firstName + '' + this.lastName;
    }
  },
  methods: {
    changeName () {
      this.firstName = 'Godgame'
    }
  }
}
</script>

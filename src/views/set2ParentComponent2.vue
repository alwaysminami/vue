<template>
  <child-component @send-message='sendMessage' ref='child_component' />
</template>
<script>
import ChildComponent from './set2ChildComponent2.vue';
  export default {
    components: { ChildComponent },
    mounted () {
      this.$refs.child_component.callFromParent();
    }
  }
</script>
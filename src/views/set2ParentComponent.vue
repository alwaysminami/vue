<template>
  <child-component @send-message='sendMessage' ref='child_component' />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
  import set2ChildComponent from './set2ChildComponent.vue';
  export default {
    components: {set2ChildComponent, ChildComponent},
    mounted () {
      this.$refs.child_component.$refs.btn.click();
    }
  }
</script>
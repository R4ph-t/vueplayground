<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
     <div class="box">
       <slot></slot>
     </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('closeModal')"></button>
  </div>
</template>

<script>
  // import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'Modal',
    mounted() {

    },

    data() {
      return {};
    },

    methods: {},
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  /*@import "./resources/assets/sass/variables";*/


</style>
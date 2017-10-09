<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
  // import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'Tab',
    props: {
      name: { required: true },
      selected: { default: false },
    },

    data() {
      return {
        isActive: false,
      };
    },

    computed: {
      href() {
        return '#/#' + this.name.toLowerCase().replace(/ /g, '-');
      },
    },

    mounted() {
      this.isActive = this.selected;
    },

  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  /*@import "./resources/assets/sass/variables";*/


</style>
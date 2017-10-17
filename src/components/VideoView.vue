<template>
  <div id="editor">
    <iframe id="code-iframe" src="https://codesandbox.io/embed/zl7w3r8n44?fontsize=12&module=%2Fcomponents%2FExercise.vue&view=preview?hidenavigation=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
  </div>
</template>

<script>
  // import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'video-view',
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
  #editor {
    margin: -15px -32px 0 -32px;
  }

  #code-iframe {
    width: 100%;
    height: 640px;
    border: 1px solid #333;
    overflow: hidden;
  }
</style>
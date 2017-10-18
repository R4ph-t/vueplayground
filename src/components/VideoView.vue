<template>
  <div id="editor">
    <iframe  id="code-iframe" src="https://codesandbox.io/embed/zl7w3r8n44?autoresize=1&fontsize=12&hidenavigation=1&initialpath=%2Fexercises&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
  </div>
</template>

<script>

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
    min-height: 700px;
    overflow: scroll;
  }
</style>
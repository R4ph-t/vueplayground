<template>
  <div id="editor-container">

    <div class="columns">
      <div class="column">
        <h1>{{ msg }}</h1>
      </div>
      <div class="column">
        <codemirror id="jsEditor"
                    ref="myEditor"
                    :code="code"
                    :options="editorOptions"
                    @ready="onEditorReady"
                    @focus="onEditorFocus"
                    @change="onEditorCodeChange">
        </codemirror>
        <button class="button is-primary">Check My Work</button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Plop',
    data() {
      return {
        msg: 'popopopop',
        code: 'var algoliasearch = require(\'algoliasearch\')',
        editorOptions: {
// codemirror options
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'monokai',
          lineNumbers: true,
          line: true,
          extraKeys: { Ctrl: 'autocomplete' },
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          styleSelectedText: true,
          highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        },
      };
    },
    methods: {
      onEditorReady(editor) {
        console.log('the editor is readied!', editor);
      },
      onEditorFocus(editor) {
        console.log('the editor is focus!', editor);
      },
      onEditorCodeChange(newCode) {
        console.log('this is new code', newCode);
        this.code = newCode;
      },
    },
    computed: {
      editor() {
        return this.$refs.myEditor.editor;
      },
    },
    mounted() {
      console.log('this is current editor object', this.editor);
      // you can use this.editor to do something...
    },
  };
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #F0F;
  }

  #editor-container {
    margin: 10px;

  }

  #jsEditor {
  }

</style>

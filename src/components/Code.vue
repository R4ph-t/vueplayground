<template>
  <div id="editor-container">
    <div class="columns">
      <div class="column">
        <Instruction>
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
          <p>{{ checkedAnswer }}</p>
        </Instruction>
      </div>
      <div class="column is-7">
        <div id="console-header">
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div>
          <div class="circle" id="circle3"></div>
        </div>
        <div class="tab-deco-container">
          <div class="tab-header">Code</div>
        </div>
        <codemirror id="jsEditor"
                    ref="myEditor"
                    :code="code"
                    :options="editorOptions"
                    @ready="onEditorReady"
                    @focus="onEditorFocus"
                    @change="onEditorCodeChange">
        </codemirror>
        <button class="button is-primary" @click="checkAnswer">Check My Work</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Instruction from './Instruction';


  export default {
    name: 'Plop',
    components: {
      Instruction,
    },
    data() {
      return {
        title: 'Instructions',
        content: 'Create a variable called "index"\n Initialize and assign to it with a name of "myIndex"',
        initialCode: 'var algoliasearch = require(\'algoliasearch\');\n' +
        'var client = algoliasearch("AnAppID", "**************");\n',
        code: 'var algoliasearch = require(\'algoliasearch\');\n' +
        'var client = algoliasearch("AnAppID", "**************");\n',
        answer: '',
        checkedAnswer: '',
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
        editor.markText({ line: 0, ch: 0 }, { line: 2, ch: 0 }, { readOnly: true, css: 'background-color:#4c4e44' });
      },
      onEditorFocus(editor) {
        // console.log('the editor is focus!', editor);
      },
      onEditorCodeChange(newCode) {
        // console.log('this is new code', newCode);
        this.evalCode(newCode);
        this.code = newCode;
      },
      evalCode(newCode) {
        // console.log('code', newCode);
        this.answer = newCode.replace(this.initialCode, '');
        console.log(this.answer);
        // const goodAnswer = 'index.setSettings(';
      },
      checkAnswer() {
        console.log('checked');
        this.checkedAnswer = this.answer;
        console.log(this.answer.replace(/\s/g, ''));
        if (this.answer.replace(/\s/g, '').includes('varindex=client.initIndex("myIndex");')) {
          console.log('yay');
        }
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
    font-size: 2em;
  }

  #console-header {
    display: flex;
    flex-direction: row;
    height: 22px;
    width: 100%;
    background-color: #dcdcdc;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  #circle1 {
    margin-left: 8px;
    background-color: #fc615d;
    border-color: #dc4441;

  }

  #circle2 {
    background-color: #fdbf41;
    border-color: #eaa930;
  }

  #circle3 {
    background-color: #34c84a;
    border-color: #1fac2a;

  }

  .circle {
    margin: 5px 0 3px 7px;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    border: 1px solid;
  }

  .tab-deco-container {
    position: relative;
    height: 34px;
    background-color: #373831;
  }

  .tab-header {
    width: 150px;
    height: 28px;
    position: absolute;
    bottom: 0;
    padding: 4px 0 0 10px;
    left: 8px;
    color: #dddddd;
    font-size: 0.9em;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    border: 1px solid #1f201c;
    border-bottom: 0px;
    background-color: #272823;

  }

  .read-only-code {
    background-color: #4c4e44;
  }

  #editor-container {
    margin: 10px;

  }

  #jsEditor {
  }

</style>

/*

var index = client.initIndex('myIndex');

`var algoliasearch = require('algoliasearch');
var client = algoliasearch("AnAppID", "**************");
var index = client.initIndex('your_index_name');
`
*/
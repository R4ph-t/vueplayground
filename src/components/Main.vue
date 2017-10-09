<template>
  <div>
    <tabs>
      <tab name="About Us" :selected="true">
        <h1>Here is the content for the about us tab.</h1>
      </tab>

      <tab name="About Our Culture">
        <h1>Here is the content for the about our culture tab.</h1>
      </tab>

      <tab name="About Our Vision">
        <h1>Here is the content for the about our vision tab.</h1>
      </tab>
    </tabs>
    <message title="title 1" body="body"></message>
    <message title="title 2" body="body 2"></message>
    <button @click="showModal = true">show Modal</button>
    <modal v-show="showModal" @closeModal="showModal = false">
      <p>this is a freaking modal bra</p>
    </modal>
  </div>
</template>

<script>
  import Message from './Message';
  import Modal from './Modal';
  import Tabs from './Tabs';
  import Tab from './Tab';

  export default {
    components: {
      Tabs,
      Tab,
      Modal,
      Message,
    },
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        showModal: false,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
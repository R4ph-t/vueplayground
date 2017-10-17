<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container is-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };

</script>

<style>
  #app {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
</style>

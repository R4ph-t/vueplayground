<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p id="logo-container" href="#" class="navbar-item">
          <img id="logo" src="../assets/algolia-logo.svg">
        </p>
      <svg class="algc-arrowseparator" viewBox="0 0 18 35" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" fill="none" fill-rule="evenodd"><g id="community/header" fill="#9d9dbd"><g id="Group-13"><g id="Group-2"><path id="Combined-Shape-Copy" d="M1.8537 34.7643l15.5597-17.268L1.8537 0H0l15.5597 17.4964L0 34.7644z"></path></g></g></g></g></svg>
      <router-link id="university" class="navbar-item" to="/">University</router-link>
    </div>
    <div class="navbar-item" id="searchbar">

    </div>
  </nav>
</template>

<script>
  // import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'Navbar',
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
  nav{
    margin-bottom: 15px;
  }
  #logo-container {
    padding-right: 5px;
  }

  #logo {

  }
  #university{
    padding-left: 5px;
    padding-right: 5px;
    font-size: 1.1em;
    color: #050f2c;
  }
  .algc-arrowseparator{
    height: 33px;
    margin: 10px 12px 0 12px;
  }

</style>
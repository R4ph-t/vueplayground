<template>
  <div>
    <div class="tabs is-boxed">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // import { mapState, mapActions, mapMutations } from 'vuex';


  export default {
    name: 'Tabs',
    mounted() {

    },

    data() {
      return {
        tabs: [],
      };
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach((tab) => {
          tab.isActive = (tab.href === selectedTab.href);
        });
      },
    },
    created() {
      this.tabs = this.$children;
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  /*@import "./resources/assets/sass/variables";*/


</style>
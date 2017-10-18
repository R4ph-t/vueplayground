<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-danger">
              <p><router-link class="title" to="code-along">Code Along</router-link></p>
              <p class="subtitle">Play with Algolia</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">a</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p><router-link class="title" to="paths">Featured</router-link></p>

              <p class="subtitle">Discover Algolia Series</p>
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title">Some Stuff</p>
            <p class="subtitle">...</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p><router-link class="title" to="code">Sandbox</router-link></p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
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
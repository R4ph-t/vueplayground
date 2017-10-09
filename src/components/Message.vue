<template>
  <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{title}}</p>
      <button class="delete" aria-label="delete" @click="hideModal"></button>
    </div>
    <div class="message-body">
      {{body}}
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      title: { required: true },
      body: { required: true },
    },
    data() {
      return {
        isVisible: true,
        msg: 'popopopop',
      };
    },
    methods: {
      hideModal() {
        console.log('hide');
        this.isVisible = false;
      },
    },
    computed: {},
    mounted() {

    },
  };
</script>
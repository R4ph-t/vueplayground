import Vue from 'vue';
import Router from 'vue-router';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/monokai.css';

import Main from '@/components/Main';
import Code from '@/components/CodeView';
import Videos from '@/components/VideoView';
import Paths from '@/components/PathView';

Vue.use(Router);
Vue.use(VueCodemirror);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/code',
      name: 'Code',
      component: Code,
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos,
    },
    {
      path: '/paths',
      name: 'Paths',
      component: Paths,
    },
  ],
});

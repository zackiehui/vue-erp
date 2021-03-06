import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Counter from '@/components/Counter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/students',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/tutors',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/courses',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
  ],
});

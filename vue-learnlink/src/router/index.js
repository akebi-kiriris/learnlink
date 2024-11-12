import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Timeline from '../views/Timeline.vue';
import Todo from '../views/Todo.vue';
import Courses from '../views/Courses.vue';
import Messages from '../views/Messages.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/timeline', component: Timeline },
  { path: '/todo', component: Todo },
  { path: '/courses', component: Courses },
  { path: '/messages', component: Messages }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
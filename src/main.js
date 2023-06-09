import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const appVue = new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

window.appVue = appVue
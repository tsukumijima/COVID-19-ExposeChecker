import Vue from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import './service-worker';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-S63S935HFP',
  }
});

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');

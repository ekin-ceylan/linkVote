import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import VueToastr from 'vue-toastr';

Vue.use(BootstrapVue);
Vue.use(VueToastr, {
    defaultTimeout: 3000,
    defaultProgressBar: false,
    defaultPosition: 'toast-top-center',
    defaultCloseOnHover: false,
    defaultClassNames: ['toastr', 'py-3', 'px-4', 'animated', 'zoomInUp'],
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

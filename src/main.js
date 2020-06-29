import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import {BootstrapVue, LayoutPlugin, VBScrollspyPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(LayoutPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 750,
    easing: "ease",
    offset: -50,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

new Vue({
    render: h => h(App),
}).$mount('#app');
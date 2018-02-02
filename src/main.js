import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routeConfig.js';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//报错  webpack 配置   { test: /\.(eot|woff|ttf)$/, loader: 'file-loader' }
import App from './App.vue';
import AV from 'leancloud-storage'
const appId = 'LeF3HQyCFgzEwxePpOzMRhRO-gzGzoHsz';
const appKey = 'WO8iyuVxX8sfFiixG8PlpTYP';
AV.init({ appId, appKey });

Vue.use(ElementUI);
Vue.prototype.$http = axios;  //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
});

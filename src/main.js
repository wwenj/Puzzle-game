import Vue from 'vue';
import 'normalize.css/normalize.css';// A modern alternative to CSS resets
// import 'Components'// 全局组件注册
import 'Directives'; // 指令
// 引入插件
import router from 'Plugins/router';
import inject from 'Plugins/inject';
import store from 'Plugins/store';
// 引入组件库及其组件库样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入svgIcon 这种icon引入方式待定
// import 'Icons'; // icon

// 引入根组件
import App from './App';

GLOBAL.vbus = new Vue();

Vue.use(inject);
Vue.use(ElementUI);

// render
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});

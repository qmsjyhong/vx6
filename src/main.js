//入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAjax from 'vue-resource';
import router from './router/';
import Locales from './locale';
import Store from './utils/store';
import VueI18n from 'vue-i18n';
import MintUI from 'mint-ui';
import components from './components/'; // 加载公共组件

import AlloyFinger from 'alloyfinger';
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue';

import App from './App'; // 主入口

//全局引入第三方插件
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueAjax);
Vue.use(AlloyFingerPlugin, {
  AlloyFinger
});
Vue.use(VueI18n);

const LOCALE_KEY = 'lang';
const locale = 'en';

Store(LOCALE_KEY, 'en');

const messages = Object.create(null);

Object.keys(Locales).forEach(local => {
  messages[local] = {
    ...Locales[local]
  };
});
const i18n = new VueI18n({
  locale,
  messages
});

Vue.prototype.msg = MintUI.Toast;
Vue.prototype.loading = MintUI.Indicator;

// Resource Header Set
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

Vue.config.productionTip = false;

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()); //首字母大写
  Vue.component(`v${name}`, components[key]);
});

function start() {
  new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: {
      App
    }
  });
}
start();

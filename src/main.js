import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局公共样式
import './assets/css/global.css'


// 引入字体图标
import './assets/font_icon/iconfont.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

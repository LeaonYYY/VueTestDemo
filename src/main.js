import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Tabbar, TabbarItem, Icon, Image as VanImage, NavBar, Cell, CellGroup, Field, Toast } from 'vant'

import 'reset-css'
import 'normalize.css'

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Icon)
  .use(VanImage).use(NavBar).use(Cell).use(CellGroup).use(Field).use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

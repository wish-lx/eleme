import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import 'common/stylus/index.styl'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
       component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})

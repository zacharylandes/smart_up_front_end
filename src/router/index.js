import Vue from 'vue'
import Router from 'vue-router'
import seriesShow from '@/components/series/show'
import seriesIndex from '@/components/series/index'
import lessonShow from '@/components/lesson/show'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: seriesIndex
    },
    {
      path: '/series/:seriesId/lessons/:id',
      name: 'lessonShow',
      component: lessonShow
    },
    {
      path: '/series',
      name: 'seriesIndex',
      component: seriesIndex
    },
    {
      path: '/series/:id',
      name: 'seriesShow',
      component: seriesShow
    }
  ]
}
)

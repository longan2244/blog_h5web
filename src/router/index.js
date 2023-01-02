import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'
import Home from '@/views/Layout/HomeView/HomeView'
import Projects from '@/views/Layout/projects/Projects'
import About from '@/views/Layout/About/About'
import Links from '@/views/Layout/Links/Links'
import Send from '@/views/Send/index'
import Article from '@/views/Article/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "/", name: "home", component: Home,
        meta: {
          keepAlive: true //需要被缓存
        }
      }, //主页

      {
        path: "/projects", name: "projects", component: Projects,
      },//项目页
      {
        path: "/about", name: "about", component: About,
      },//关于
      {
        path: "/links", name: "links", component: Links,
      },//友链
      {
        path: '/article/:id', name: "", component: Article, props: true //具体文章
      }
    ]
  },
  {
    path: '/send',
    name: 'send',
    component: Send,
  }

]

const router = new VueRouter({
  routes
})

export default router

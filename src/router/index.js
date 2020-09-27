import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Foo = {
  template: '<div>foo</div>'
}

const routes = [{
  path: '/foo',
  component: Foo
}]

const router = new VueRouter({
  routes
})

module.exports = router
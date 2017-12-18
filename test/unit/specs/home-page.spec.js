import Vue from 'vue'
import HomePage from '@/components/home-page.vue'

describe('Home Page', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomePage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('User List')
  })
})

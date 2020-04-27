import Card from '@/components/Card.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    Vue.use(Vuetify)
    wrapper = mount(Card, {
      propsData: {
        person: {
          address: '3816 Goodland Street',
          email: 'itrenoweth0@creativecommons.org',
          fullName: 'Isaak Trenoweth',
          gender: 'Male',
          id: 1
        }
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  test('has card class', () => {
    expect(wrapper.contains('.card')).toBe(true)
  })
})

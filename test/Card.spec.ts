import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const wrapper = shallowMount(Card, {
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

describe('Card', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('Dont have a created hook', () => {
    expect(typeof wrapper.vm.$props.person).toBe('object')
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  test('has card class', () => {
    expect(wrapper.contains('.card')).toBe(true)
  })
})

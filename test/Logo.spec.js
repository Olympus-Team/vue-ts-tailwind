import Logo from '@/components/Logo.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Logo)

describe('Logo', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})

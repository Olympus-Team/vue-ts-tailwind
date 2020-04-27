import Logo from '@/components/Logo.vue'
import { mount } from '@vue/test-utils'

const factory = () => {
  return mount(Logo, {})
}

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

export interface Snack {
  content: string
  color: string
}

export const state = () => ({
  content: '',
  color: ''
})

export const mutations = {
  showMessage(state, payload: Snack) {
    state.content = payload.content
    state.color = payload.color
  }
}

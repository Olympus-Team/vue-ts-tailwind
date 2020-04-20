import localRandomData from '@/static/MOCK_DATA.json'
import { Person, RootState } from '@/types'
import { Context as AppContext } from '@nuxt/types'
import { ActionContext, ActionTree, MutationTree } from 'vuex'

export const state = (): RootState => ({
  people: []
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic ? localRandomData : await context.app.$axios.$get('./MOCK_DATA.json')

    commit('setPeople', people.slice(0, 10))
  }
}

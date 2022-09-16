export enum TypeView {
  horizontal = 'horizontal',
  tiled = 'tailed',
}

export const state = () => ({
  view: TypeView.tiled,
  search: '',
  page: 1,
})

export const mutations = {
  setView(state: any, payload: TypeView) {
    state.view = payload
  },
  setSearch(state: any, payload: string) {
    state.search = payload
  },
  setPage(state: any, payload: string) {
    state.page = payload
  },
}
export const getters = {
  getView: (store: any) => {
    return store.view
  },
  getSearch: (store: any) => {
    return store.search
  },
  getPage: (store: any) => {
    return store.page
  },
  getStore: (store: any) => {
    return store
  },
}

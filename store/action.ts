import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
export enum TypeView {
  horizontal = 'horizontal',
  tiled = 'tailed',
}
@Module({
  name: 'action',
  stateFactory: true,
  namespaced: true,
})
export default class Action extends VuexModule {
  view: TypeView = TypeView.tiled
  search: string = ''
  page: number = 1

  @Mutation
  setView(view: TypeView) {
    this.view = view
  }

  @Mutation
  setPage(page: number) {
    this.page = page
  }

  @Mutation
  setSearch(search: string) {
    this.search = search
  }

  get getView() {
    return this.view
  }

  get getPage() {
    return this.page
  }

  get getSearch() {
    return this.search
  }
}

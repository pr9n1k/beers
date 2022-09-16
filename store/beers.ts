import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { Beer } from '~/types/Beer'
import { $axios } from '~/utils/api'

@Module({
  name: 'beers',
  stateFactory: true,
  namespaced: true,
})
export default class Beers extends VuexModule {
  beers: Array<Beer> = []

  @MutationAction({ mutate: ['beers'] })
  async fetch() {
    const beerArray: Beer[] = []
    let i: number
    let length: number = 0
    for (i = 1; ; i++) {
      await $axios
        .$get<Beer[]>(`https://api.punkapi.com/v2/beers?per_page=80&page=${i}`)
        .then((res) => {
          beerArray.push(...res)
          length = res.length
        })
        .catch((e) => e.message)
      if (length === 0) {
        break
      }
    }
    return { beers: beerArray }
  }

  get getBeers() {
    return this.beers
  }
}

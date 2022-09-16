import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Action from '~/store/action'
import Beers from '~/store/beers'

// eslint-disable-next-line import/no-mutable-exports
let BeersStore: Beers
// eslint-disable-next-line import/no-mutable-exports
let ActionStore: Action

function initialiseStores(store: Store<any>): void {
  BeersStore = getModule(Beers, store)
  ActionStore = getModule(Action, store)
}

export { initialiseStores, BeersStore, ActionStore }

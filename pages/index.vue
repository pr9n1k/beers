<template>
  <div class="wrapper home">
    <Sidebar />
    <BeerList v-if="searchHandler.length" :list="paginate" :view="getView" />
    <h2 v-else>Ничего не найдено..</h2>
    <v-pagination
      v-show="searchHandler.length > 6"
      v-model="pageNumber"
      :total-visible="5"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      dark
      circle
      class="pagination"
      :length="Math.ceil(searchHandler.length / 6)"
      @input="next"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActionStore, BeersStore } from '~/store'
import { TypeView } from '~/store/action'
import { Beer } from '~/types/Beer'
import BeerList from '~/components/BeerList.vue'
import Sidebar from '~/components/Sidebar.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: { BeerList, Sidebar },
  loading: false,
  data: () => ({
    pageNumber: 0 as number,
    dialog: false as boolean,
  }),
  async fetch() {
    if (BeersStore.getBeers.length === 0) {
      await BeersStore.fetch()
    }
  },
  computed: {
    searchHandler(): Beer[] {
      const search = ActionStore.getSearch
      return BeersStore.getBeers.filter((item) => {
        return (
          item.name.toLocaleLowerCase().includes(search) ||
          item.description.toLocaleLowerCase().includes(search) ||
          item.tagline.toLocaleLowerCase().includes(search)
        )
      })
    },
    getView(): TypeView {
      return ActionStore.getView
    },
    getPage(): number {
      return ActionStore.getPage
    },
    getSearch(): string {
      return ActionStore.getSearch
    },
    paginate(): Beer[] {
      return this.searchHandler.slice(
        (this.pageNumber - 1) * 6,
        this.pageNumber * 6
      )
    },
  },
  watch: {
    getPage(): void {
      this.pageNumber = ActionStore.getPage
    },
  },
  mounted() {
    this.pageNumber = ActionStore.getPage
  },
  methods: {
    next(page: number): void {
      ActionStore.setPage(page)
    },
  },
})
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background: #ffffff;
}
.pagination {
  margin: 0 auto;
  padding: 20px 0;
}
.sidebar {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 575.98px) {
  .pagination {
    padding: 10px 0;
  }
}
</style>

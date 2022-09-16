<template>
  <div class="sidebar">
    <v-text-field
      v-model="search"
      label="Поиск..."
      class="input"
      @input="setSearch"
    ></v-text-field>
    <div>
      <v-radio-group v-model="view" row @change="setView">
        <v-radio label="плитка" :value="valueTailed"></v-radio>
        <v-radio label="списком" :value="valueHorizontal"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActionStore } from '~/store'
import { TypeView } from '~/store/action'
export default Vue.extend({
  name: 'SideBar',
  data: () => ({
    view: TypeView.tiled,
    search: '' as string,
  }),
  computed: {
    getView(): TypeView {
      return ActionStore.getView
    },
    getSearch(): string {
      return ActionStore.getSearch
    },
    valueTailed(): TypeView {
      return TypeView.tiled
    },
    valueHorizontal(): TypeView {
      return TypeView.horizontal
    },
  },
  watch: {
    getView(): void {
      this.view = ActionStore.getView
    },
    getSearch(): void {
      this.search = ActionStore.getSearch
    },
  },
  mounted() {
    this.view = ActionStore.getView
    this.search = ActionStore.getSearch
  },
  methods: {
    setView(e: TypeView): void {
      ActionStore.setView(e)
    },
    setSearch(e: string): void {
      ActionStore.setPage(1)
      ActionStore.setSearch(e)
    },
  },
})
</script>

<style lang="scss">
.sidebar {
  display: flex;
  justify-content: space-between;
}
.input {
  max-width: 200px;
}

@media (max-width: 575.98px) {
  .v-icon.v-icon {
    font-size: 16px;
  }
}
@media (max-width: 479.98px) {
  .v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 0;
  }
  .input {
    width: 145px;
  }
}
</style>

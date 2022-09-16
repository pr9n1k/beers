<template>
  <div class="wrapper home">
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
    <div :class="beer__list">
      <div v-for="beer of paginate" :key="beer.id" class="beer__item">
        <div class="beer__item-img">
          <img :src="beer.image_url" alt="image" />
        </div>
        <div class="beer__item-info">
          <a
            href="#"
            class="beer__item-title"
            @click.prevent="openBeer(beer.id)"
            >{{ beer.name }}</a
          >
          <p class="beer__item-description">{{ beer.description }}</p>
        </div>
      </div>
    </div>
    <div>
      <v-pagination
        v-show="searchHandler.length > 6"
        v-model="pageNumber"
        :total-visible="23"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        dark
        circle
        class="pagination"
        :length="Math.ceil(searchHandler.length / 6)"
        @input="next"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { TypeView } from '~/store'
export default {
  name: 'IndexPage',
  components: {},
  data: () => ({
    beers: [],
    search: '',
    pageNumber: 0,
    view: '',
  }),
  async fetch({ store }) {
    if (store.getters['beers/getBeers'].length === 0) {
      await store.dispatch('beers/fetch')
    }
  },
  computed: {
    searchHandler() {
      return this.$store.getters['beers/getBeers'].filter((item) => {
        return (
          item.name.toLocaleLowerCase().includes(this.search) |
          item.description.toLocaleLowerCase().includes(this.search) |
          item.tagline.toLocaleLowerCase().includes(this.search)
        )
      })
    },
    getView() {
      return this.$store.getters.getView
    },
    getPage() {
      return this.$store.getters.getPage
    },
    getSearch() {
      return this.$store.getters.getSearch
    },
    paginate() {
      return this.searchHandler.slice(
        (this.pageNumber - 1) * 6,
        this.pageNumber * 6
      )
    },
    beer__list() {
      return 'beer__list ' + this.view
    },
    valueTailed() {
      return TypeView.tiled
    },
    valueHorizontal() {
      return TypeView.horizontal
    },
  },
  watch: {
    getView() {
      this.view = this.$store.getters.getView
    },
    getPage() {
      this.pageNumber = this.$store.getters.getPage
    },
    getSearch() {
      this.search = this.$store.getters.getSearch
    },
  },
  mounted() {
    this.view = this.$store.getters.getView
    this.pageNumber = this.$store.getters.getPage
    this.search = this.$store.getters.getSearch
  },
  methods: {
    next(page) {
      this.$store.commit('setPage', page)
    },
    openBeer(id) {
      this.$router.push(`/${id}`)
    },
    setView(e) {
      this.$store.commit('setView', e)
    },
    setSearch(e) {
      this.pageNumber = 1
      this.$store.commit('setSearch', e)
    },
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background: #ffffff;
}
.beer {
  &__list {
    display: flex;
    flex: 1 1 auto;
  }
  &__item-img {
    img {
      height: 100%;
      margin: 0 auto;
      display: block;
    }
  }
  &__item-title {
    text-decoration: none;
  }
  &__item-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.beer__list.tailed {
  flex-wrap: wrap;
}
.beer__list.horizontal {
  flex-direction: column;
  .beer__item {
    display: flex;
  }
  .beer__item-img {
    min-width: 120px;
    height: 100px;
  }
}
.pagination {
  margin: 0 auto;
  padding: 20px 0;
}
.sidebar {
  display: flex;
  justify-content: space-between;
}
.input {
  max-width: 200px;
}
@media (max-width: 991px) {
  .beer__item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

@media (min-width: 480px) {
  .beer__list.tailed {
    .beer__item-img {
      height: 300px;
    }
  }
  .beer__list.horizontal {
    .beer__item :not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 1200px) and (min-width: 991px) {
  .beer__list.tailed {
    .beer__item-img {
      height: 200px;
    }
  }
}
@media (min-width: 576px) {
  .beer__list.tailed {
    .beer__item {
      width: calc(100% / 3 - 40px / 3);
    }
    .beer__item {
      margin-right: 20px;
    }
    .beer__item:nth-child(3n + 3) {
      margin-right: 0;
    }
  }
}
@media (max-width: 575.98px) {
  .beer__list.tailed {
    .beer__item {
      width: calc(100% / 2 - 10px / 2);
    }
    .beer__item {
      margin-right: 10px;
    }
    .beer__item:nth-child(2n + 2) {
      margin-right: 0;
    }
    .beer__item-img {
      height: 150px;
    }
  }
  .pagination {
    padding: 10px 0;
  }
  .v-icon.v-icon {
    font-size: 16px;
  }
}
@media (max-width: 479.98px) {
  .wrapper {
    padding: 0 10px;
  }
  .beer__list.tailed {
    .beer__item-img {
      height: 100px;
    }
  }
  .beer__list.horizontal {
    .beer__item:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 0;
  }
  .input {
    width: 145px;
  }
}
</style>

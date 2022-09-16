<template>
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
</template>

<script lang="ts">
//   import Vue from "vue"
// export default Vue.extend({
//   name: 'BeerList',
//   props: {
//     paginate: {
//       type: Array,
//       default() {
//         return []
//       },
//     },
//   },
//   data: () => ({}),
//   computed: {
//     beer__list({$store}): string {
//       return 'beer__list ' + $store.getters.getView
//     },
//   },
//   methods: {
//     openBeer(id) {
//       this.$router.push(`/${id}`)
//     },
//   },
// })
</script>

<style lang="scss">
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
}
@media (max-width: 479.98px) {
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
}
</style>

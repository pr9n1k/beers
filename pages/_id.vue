<template>
  <div class="wrapper beer">
    <div class="back">
      <v-btn class="ma-2" color="gray darken-2" dark @click="back">
        <v-icon dark left> mdi-arrow-left </v-icon>Back
      </v-btn>
    </div>
    <div class="beer__content">
      <div class="beer__img">
        <img :src="beer.image_url" alt="" />
      </div>
      <div class="beer__info">
        <h1 class="beer__title">{{ beer.name }}</h1>
        <h3 class="beer__tagline">{{ beer.tagline }}</h3>
        <p><strong>Рейтинг:</strong> {{ beer.abv }}</p>
        <strong>Подойдет под:</strong>
        <ul>
          <li v-for="(pairing, index) of beer.food_pairing" :key="index">
            {{ pairing }}
          </li>
        </ul>
        <p class="beer__description">
          <strong>Описание: </strong>{{ beer.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    if (/^\d+$/.test(params.id)) {
      return true
    } else {
      return false
    }
  },
  async asyncData({ $axios, params }) {
    const beer = await $axios.$get(
      `https://api.punkapi.com/v2/beers/${params.id}`
    )
    return { beer: beer[0] }
  },
  data: () => ({
    beer: {},
  }),
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss">
.beer {
  padding-top: 40px;
  background: #ffffff;
  .back {
    width: 100%;
    height: max-content;
  }
  &__content {
    margin-top: 20px;
  }
  &__img {
    height: 500px;
    margin-left: 40px;
  }
  &__tagline {
    margin-bottom: 10px;
  }
  &__title {
    padding-top: 20px;
  }
}
@media (min-width: 576px) {
  .beer {
    &__content {
      display: flex;
    }
    &__info {
      margin-left: 40px;
    }
  }
}
@media (max-width: 767.98px) {
  .beer {
    &__img {
      height: calc(200px + (500 - 200) * ((100vw - 320px) / (768 - 320)));
    }
    h1 {
      line-height: 1;
      margin-bottom: 10px;
      font-size: 1.5em;
    }
  }
}
@media (max-width: 575.98px) {
  .beer {
    padding-top: 10px;
    &__conten {
      margin-top: 0;
    }
  }
}
</style>

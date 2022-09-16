<template>
  <v-app class="content v-application">
    <!-- <MyHeader /> -->
    <main class="main">
      <Nuxt />
    </main>
  </v-app>
</template>

<script>
// import MyHeader from '@/components/Header'
export default {
  name: 'DefaultLayout',
  components: {
    // MyHeader,
  },
  data() {
    return {}
  },
}
</script>

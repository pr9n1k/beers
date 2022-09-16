<template>
  <header class="header">
    <NuxtLink to="/">Beer</NuxtLink>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

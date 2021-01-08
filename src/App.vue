<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>

  </div>
</template>

<script>
  import MainLayout from "./layouts/MainLayout"
  import AdminLayout from "./layouts/AdminLayout"
  import EmptyLayout from "./layouts/EmptyLayout";
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      MainLayout,
      AdminLayout,
      EmptyLayout
    }
  }
</script>

<style lang="scss">

</style>

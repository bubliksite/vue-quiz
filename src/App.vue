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
  export default {
    computed: {
      layout() {
        console.log(this.$route.meta)
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      MainLayout,
      AdminLayout
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap');
  *{
    font-family: 'Raleway', sans-serif;
  }
  a {
    text-decoration: none;
    &:hover {
      @extend a
    }
  }
</style>

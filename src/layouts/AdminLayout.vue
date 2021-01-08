<template>
    <div class="app">
        <header class="py-3">
            <h1 class="text-center py-4">{{ Header }}</h1>
        </header>
        <router-view class="mt-5"/>
    </div>
</template>

<script>
    export default {
        name: "AdminLayout",
        computed: {
            Header() {
                return this.$route.meta.name
            }
        }
    }
</script>

<style lang="scss">

</style>
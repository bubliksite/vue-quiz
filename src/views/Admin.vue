<template>
    <div class="container">
        <loader v-if="loader"/>
        <div class="row" v-else>
            <router-link class="col-12 mb-4" :to="{name: 'createGame'}">
                <div class="d-flex align-items-center justify-content-center card-button p-4">
                    <img src="@/assets/images/image 6.png" alt="">
                    <h4 class="ml-3 mb-0 text-center">Создать игру</h4>
                </div>
            </router-link>
            <router-link class="col-12 mb-4" :to="{name: 'activeGames'}">
                <div class="d-flex align-items-center justify-content-center card-button p-4">
                    <img src="@/assets/images/image 7.png" alt="">
                    <h4 class="ml-3 mb-0 text-center">Активные игры</h4>
                </div>
            </router-link>
            <router-link class="col-12 mb-4" :to="{name: 'endedGames'}">
                <div class="d-flex align-items-center justify-content-center card-button p-4">
                    <img src="@/assets/images/image 8.png" alt="">
                    <h4 class="ml-3 mb-0 text-center">Завершенные игры</h4>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "Admin",
        data: () => ({
          loader: true
        }),
        mounted() {
            this.loader = false
        },
        components: {
            Loader
        }
    }
</script>

<style lang="scss">

</style>
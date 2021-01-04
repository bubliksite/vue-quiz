<template>
    <div class="container">
        <div class="row">
            <router-link class="col-lg-4 col-md-6 col-12 mb-3" :to="{name: 'createGame'}">
                <div class="d-flex align-items-center card-button py-3 px-4">
                    <img src="@/assets/images/image 6.png" alt="">
                    <h4 class="ml-3 mb-0 text-center w-100">Создать игру</h4>
                </div>
            </router-link>
            <router-link class="col-lg-4 col-md-6 col-12 mb-3" :to="{name: 'activeGames'}">
                <div class="d-flex align-items-center card-button py-3 px-4">
                    <img src="@/assets/images/image 7.png" alt="">
                    <h4 class="ml-3 mb-0 text-center w-100">Активные игры</h4>
                </div>
            </router-link>
            <router-link class="col-lg-4 col-md-6 col-12 mb-3" :to="{name: 'endedGames'}">
                <div class="d-flex align-items-center card-button py-3 px-4">
                    <img src="@/assets/images/image 8.png" alt="">
                    <h4 class="ml-3 mb-0 text-center w-100">Завершенные игры</h4>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style lang="scss">
    * {
        color: black;
    }
    h1 {
        color: white;
    }
    .card-button {
        border: 2px solid #e5e5e5;
        border-radius: 20px;
        img {
            height: 64px;
            object-fit: contain;
        }
    }
</style>
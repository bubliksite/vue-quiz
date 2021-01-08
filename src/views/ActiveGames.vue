<template>
    <div class="container mt-5">
        <loader v-if="loader"/>
        <div v-for="(game, id, index) in games" :key="game.id" v-else-if="!loader">
            <div v-if="game.status === 'isActive'" class="d-flex justify-content-between mb-4">
                <div class="d-flex justify-content-left w-100">
                    <div>
                        <h3 class="font-weight-bold">{{ game.gameName }}#{{ index+1 }}</h3>
                        <h6 class="mb-0 w-100">{{ game.created | formatDate }}</h6>
                    </div>
                </div>
                <div class="d-flex justify-content-end w-100">
                    <router-link :to="{name: 'currentGame', params: {id: id}, query: {round: game.currentRound}}" class="mr-5"><img style="height: 25px" src="../assets/images/icon-play.svg" alt=""></router-link>
                    <a href="" @click.prevent="deleteGame(id)"><img style="height: 25px" src="../assets/images/icon-trash.svg" alt=""></a>
                </div>
            </div>
            <div v-else>
                <h5 class="text-center">Нет активных игр. Время <router-link :to="{name:'createGame'}" class="text-success"> создать новую</router-link> и сыграть!</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-2">
                <router-link type="button" class="btn btn-blue w-100 mt-4" :to ="{name: 'Admin'}">
                    Назад
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../components/Loader";
    export default {
        name: "ActiveGames",
        data: () => ({
            games: [],
            index: 0,
            loader: true
        }),
        async mounted() {
            this.games = await this.$store.dispatch('getGames')
            this.loader = false
        },
        methods: {
            async deleteGame(gameId) {
                await this.$store.dispatch('deleteGame', {
                    gameId
                })
                this.games = await this.$store.dispatch('getGames')
            },
        },
        components: {
            Loader
        }
    }
</script>

<style scoped>

</style>